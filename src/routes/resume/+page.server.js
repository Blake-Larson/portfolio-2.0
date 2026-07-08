import { error } from '@sveltejs/kit';
import { loadResumeData } from '$lib/load-resume-data.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const variant = url.searchParams.get('variant');
	const resumeData = await loadResumeData(variant);

	if (variant && !resumeData) {
		error(404, `Resume variant "${variant}" not found`);
	}

	if (!resumeData) {
		error(500, 'Resume data unavailable');
	}

	return {
		contact: resumeData.contact,
		selectedProject: resumeData.selectedProject,
		experiences: resumeData.experiences,
		skills: resumeData.skills,
		education: resumeData.education,
		interests: resumeData.interests
	};
}
