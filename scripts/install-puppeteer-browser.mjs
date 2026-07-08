import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import puppeteer from 'puppeteer';

try {
	const bundledPath = puppeteer.executablePath();
	if (existsSync(bundledPath)) {
		process.exit(0);
	}
} catch {
	// Bundled Chrome not installed yet.
}

console.log('Installing Puppeteer Chrome for resume PDF export...');
execFileSync('npx', ['puppeteer', 'browsers', 'install', 'chrome'], {
	stdio: 'inherit'
});
