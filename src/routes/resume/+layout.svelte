<script>
	import '../../app.css';
	import { onMount } from 'svelte';

	onMount(() => {
		document.documentElement.classList.add('resume-page');
		return () => document.documentElement.classList.remove('resume-page');
	});
</script>

<div class="min-h-screen bg-neutral-200 py-8 font-sans print:bg-white print:py-0">
	<div class="mx-auto max-w-[8.5in] px-4 print:max-w-none print:px-0">
		<div class="mb-4 flex items-center justify-between print:hidden">
			<a href="/" class="text-sm text-neutral-600 hover:text-neutral-900">← Home</a>
			<a
				href="/documents/blake-larson-resume.pdf"
				download="blake-larson-resume.pdf"
				class="inline-flex items-center gap-1.5 rounded-md bg-[#4a7c7c] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#3d6666]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="h-4 w-4"
					aria-hidden="true">
					<path
						d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
					<path
						d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
				</svg>
				Download PDF
			</a>
		</div>
		<slot />
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.neutral.200);
		scroll-behavior: smooth;
	}

	@media print {
		:global(html) {
			background-color: white;
		}

		@page {
			size: letter;
			margin: 0.4in 0.45in;
		}
	}
</style>
