<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div class="md:my-20 font-display md:p-golden-xl max-w-4xl 2xl:max-w-6xl mx-auto rounded-lg">
	<Header />

	{@render children()}
	<Footer />
</div>
