<script lang="ts">
	import { addresses, type Address } from '$lib/addresses';

	const today = new Date().toLocaleDateString('en-US', {
		weekday: 'long'
	});
</script>

{#snippet makeAddressBlock(address: Address)}
	<div class="grid grid-cols-2 items-center md:p-golden-xl">
		<div
			class="md:text-right text-center py-golden-md px-golden-2xl md:col-span-1 col-span-2 bg-primary-muted/30 md:bg-transparent"
		>
			<div class="font-semibold text-lg">
				<span class="whitespace-nowrap">{address.city}</span>
				<a href="https://maps.google.com/maps?oi=map&q={address.address.replace(/\s/g, '+')}"></a>
			</div>

			Phone: {address.phone} <br />
			{#if address.fax}
				FAX: {address.phone} <br />
			{/if}
			{address.address}
		</div>
		<div
			class="md:border-l-2 md:col-span-1 col-span-2 border-primary-muted p-golden-xl
	       grid grid-cols-2 md:grid-cols-[max-content_1fr] gap-x-golden-md"
		>
			{#each Object.entries(address.hours) as [day, hours] (day)}
				<div class:font-bold={day === today} class="text-right md:text-left">
					{day}
				</div>
				<div class:font-bold={day === today}>
					{hours}
				</div>
			{/each}
		</div>
	</div>
{/snippet}

<div class="bg-primary-muted/10 prose max-w-none">
	<div class="grid gap-y-golden-lg gap-x-golden-md">
		{#each addresses as address, i (address)}
			<div class={i % 2 === 0 ? '' : 'md:bg-primary-muted/10'}>
				{@render makeAddressBlock(address)}
			</div>
		{/each}
	</div>
</div>
