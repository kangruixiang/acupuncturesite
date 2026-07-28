<script lang="ts">
	const images = [
		'11.jpg',
		'xue.jpg',
		'13.jpg',
		'peter.jpg',
		'15.jpg',
		'bin.jpg',
		'17.jpg',
		'nancy.jpg',
		'yan.jpg',
		'20.jpg',
		'lei.jpg'
	];

	// Duplicate images for looping
	const looped = [...images, ...images];
</script>

<div class="overflow-hidden slider-container py-golden-md bg-primary-muted">
	<div class="flex slider-track gap-4 animate-marquee">
		{#each looped as image, i (i)}
			<img src={image} alt="" class="h-64 w-auto shrink-0 object-cover rounded-lg" />
		{/each}
	</div>
</div>

<style>
	@keyframes marquee {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	.animate-marquee {
		animation: marquee 30s linear infinite;
		width: max-content;
	}

	.slider-container:hover .slider-track {
		animation-play-state: paused;
	}
</style>
