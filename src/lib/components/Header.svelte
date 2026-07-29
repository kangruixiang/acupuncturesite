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

<div class="w-full bg-primary rounded-t-md">
	<a href="/" class="flex gap-x-golden-sm items-baseline">
		<img src="logo_pic.png" class="h-24 p-golden-md" alt="" />
		<img src="Logo.png" class="h-20 pb-golden-sm" alt="" /></a
	>
</div>

<div class="w-full h-12 flex items-center justify-around">
	{#each links as link (link.text)}
		<button onclick={() => goto(link.url)} class="btn btn-ghost hover:bg-primary-subtle/10">
			{link.text}
		</button>
	{/each}
</div>
