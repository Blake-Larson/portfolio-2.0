import { error } from '@sveltejs/kit';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const VARIANT_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const variant = url.searchParams.get('variant');

	if (!variant || !VARIANT_SLUG.test(variant)) {
		error(400, 'A valid resume variant is required');
	}

	const filename = `blake-larson-resume-${variant}.pdf`;
	const pdfPath = path.resolve('resumes', variant, filename);
	const resumesRoot = path.resolve('resumes');

	if (!pdfPath.startsWith(resumesRoot + path.sep)) {
		error(400, 'Invalid resume variant');
	}

	if (!existsSync(pdfPath)) {
		error(
			404,
			`PDF for variant "${variant}" not found. Run: npm run resume:pdf -- --variant ${variant}`
		);
	}

	const pdf = await readFile(pdfPath);

	return new Response(pdf, {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': `attachment; filename="${filename}"`,
			'Cache-Control': 'no-store'
		}
	});
}
