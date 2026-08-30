<script lang="ts">
	import { goto } from '$app/navigation';

	type Links = { text: string; url: string };

	const links: Links[] = [
		{
			text: 'Home',
			url: '/'
		},
		{
			text: 'About Dr. Xue-Cui Xiang',
			url: '/xiang'
		},
		{
			text: 'Our Providers',
			url: '/providers'
		},

		{
			text: 'Testimonials',
			url: '/testimonials'
		},
		{
			text: 'Resources',
			url: '/resources'
		},
		{
			text: 'Hours & Contact',
			url: '/contact'
		}
	];
</script>

<div class="w-full bg-primary h-28 rounded-t-md flex items-center px-golden-md">
	<a href="/" class="flex h-full py-2 gap-x-golden-sm items-baseline">
		<img src="logo_pic.png" class="h-full w-auto object-contain" alt="" />
		<img src="Logo.png" class="md:h-full max-h-full md:w-auto w-full object-contain" alt="" /></a
	>
</div>

<div
	class="w-full md:py-golden-md grid grid-cols-2 md:grid-cols-3 gap-2 lg:flex items-center md:flex-wrap h-full lg:justify-around bg-header"
>
	{#each links as link (link.text)}
		<button
			onclick={() => goto(link.url)}
			class="btn btn-ghost text-base-300 dark:text-base-content hover:bg-primary-muted/30"
		>
			{link.text}
		</button>
	{/each}
</div>
