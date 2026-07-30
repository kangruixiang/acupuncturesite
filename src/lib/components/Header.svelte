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
			text: 'Contact Us',
			url: '/contact'
		}
	];
</script>

<div class="w-full bg-primary h-28 rounded-t-md flex items-center px-golden-md">
	<a href="/" class="flex gap-x-golden-sm items-baseline">
		<img src="logo_pic.png" class="" alt="" />
		<img src="Logo.png" class="" alt="" /></a
	>
</div>

<div class="w-full py-golden-sm flex items-center flex-wrap h-full md:justify-around">
	{#each links as link (link.text)}
		<button onclick={() => goto(link.url)} class="btn btn-ghost hover:bg-primary-muted/30">
			{link.text}
		</button>
	{/each}
</div>
