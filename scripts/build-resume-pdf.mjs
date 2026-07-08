import { spawn, execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import puppeteer from 'puppeteer-core';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const port = 4173;

function parseVariant(argv) {
	const index = argv.indexOf('--variant');
	if (index === -1) return null;
	const value = argv[index + 1];
	if (!value || value.startsWith('--')) {
		throw new Error('Missing value for --variant. Usage: npm run resume:pdf -- --variant <name>');
	}
	return value;
}

const variant = parseVariant(process.argv.slice(2));
const resumeUrl = variant
	? `http://localhost:${port}/resume?variant=${encodeURIComponent(variant)}`
	: `http://localhost:${port}/resume`;
const outputPath = variant
	? path.join(root, `resumes/${variant}/blake-larson-resume-${variant}.pdf`)
	: path.join(root, 'static/documents/blake-larson-resume.pdf');

const variantDataPath = variant
	? path.join(root, 'src/lib/resumes', variant, 'resume-data.js')
	: null;

function run(command, args, options = {}) {
	return new Promise((resolve, reject) => {
		const child = spawn(command, args, {
			cwd: root,
			stdio: 'inherit',
			shell: process.platform === 'win32',
			...options
		});

		child.on('error', reject);
		child.on('close', (code) => {
			if (code === 0) resolve();
			else reject(new Error(`${command} ${args.join(' ')} exited with code ${code}`));
		});
	});
}

async function waitForServer(url, timeoutMs = 30000) {
	const start = Date.now();

	while (Date.now() - start < timeoutMs) {
		try {
			const response = await fetch(url);
			if (response.ok) return;
		} catch {
			// Server not ready yet.
		}

		await new Promise((resolve) => setTimeout(resolve, 250));
	}

	throw new Error(`Timed out waiting for ${url}`);
}

const SYSTEM_CHROME_PATHS = {
	darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
	linux: '/usr/bin/google-chrome',
	win32: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
};

async function resolveChromePath() {
	const systemPath = SYSTEM_CHROME_PATHS[process.platform];
	if (systemPath && existsSync(systemPath)) {
		console.log(`Using system Chrome at ${systemPath}`);
		return systemPath;
	}

	console.log('Installing Chrome for Testing (one-time setup)...');
	execFileSync('npx', ['--yes', '@puppeteer/browsers', 'install', 'chrome@stable'], {
		cwd: root,
		stdio: 'inherit'
	});

	const { computeExecutablePath, Browser, resolveBuildId } = await import('@puppeteer/browsers');
	const buildId = await resolveBuildId(Browser.CHROME, 'stable');

	return computeExecutablePath({
		browser: Browser.CHROME,
		buildId
	});
}

async function launchBrowser() {
	const executablePath = await resolveChromePath();
	return puppeteer.launch({ headless: true, executablePath });
}

async function main() {
	if (variantDataPath && !existsSync(variantDataPath)) {
		throw new Error(
			`Resume variant "${variant}" not found at ${variantDataPath}. Create src/lib/resumes/${variant}/resume-data.js first.`
		);
	}

	if (variant) {
		console.log(`Using resume variant: ${variant}`);
	}

	console.log('Building site...');
	await run('npm', ['run', 'build']);

	console.log('Starting preview server...');
	const preview = spawn('npm', ['run', 'preview', '--', '--port', String(port), '--strictPort'], {
		cwd: root,
		stdio: 'ignore',
		shell: process.platform === 'win32'
	});

	try {
		await waitForServer(resumeUrl);

		console.log('Generating PDF...');
		const browser = await launchBrowser();
		const page = await browser.newPage();
		await page.goto(resumeUrl, { waitUntil: 'networkidle0' });
		await page.emulateMediaType('print');

		const pdf = await page.pdf({
			format: 'letter',
			printBackground: true,
			margin: { top: '0.4in', right: '0.45in', bottom: '0.4in', left: '0.45in' },
			scale: 0.96
		});

		await browser.close();
		await fs.mkdir(path.dirname(outputPath), { recursive: true });
		await fs.writeFile(outputPath, pdf);
		console.log(`Wrote ${outputPath}`);
	} finally {
		preview.kill('SIGTERM');
	}
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
