<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<div
	class="my-20 font-display p-golden-md md:p-golden-xl max-w-5xl 2xl:max-w-7xl mx-auto rounded-lg"
>
	<Header />

	{@render children()}
</div>
