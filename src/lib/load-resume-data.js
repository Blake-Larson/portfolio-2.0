import { existsSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import * as defaultData from './resume-data.js';

const root = process.cwd();

/** @param {string | null} variant */
export async function loadResumeData(variant) {
	if (!variant) {
		return defaultData;
	}

	const variantPath = path.join(root, 'resumes', variant, 'resume-data.js');
	if (!existsSync(variantPath)) {
		return null;
	}

	return import(pathToFileURL(variantPath).href);
}
