<script>
	import Header from './Header.svelte'; // Importing the Button component
</script>

<body
	class="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900"
>
	<Header />
</body>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.slate.900);
	}
</style>
