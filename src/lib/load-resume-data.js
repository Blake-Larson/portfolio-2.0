import * as defaultData from './resume-data.js';

/** @typedef {typeof defaultData} ResumeDataModule */

const variantModules = import.meta.glob('./resumes/*/resume-data.js');

/** @param {string | null | undefined} variant @returns {Promise<ResumeDataModule | null>} */
export async function loadResumeData(variant) {
	if (!variant) {
		return defaultData;
	}

	const modulePath = `./resumes/${variant}/resume-data.js`;
	const loader = variantModules[modulePath];
	if (!loader) {
		return null;
	}

	return /** @type {Promise<ResumeDataModule>} */ (loader());
}
