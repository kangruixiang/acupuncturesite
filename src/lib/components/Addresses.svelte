<script lang="ts">
	import { addresses, type Address } from '$lib/addresses';
	import { MapPin } from '@lucide/svelte';
</script>

{#snippet makeAddressBlock(address: Address)}
	<div class="text-center group">
		<div class="font-semibold text-lg flex items-center justify-center gap-x-golden-sm">
			<span class="whitespace-nowrap">{address.city}</span>
			<a
				class="group-hover:animate-bounce"
				href="https://maps.google.com/maps?oi=map&q={address.address.replace(/\s/g, '+')}"
				><MapPin size={15} /></a
			>
		</div>

		{address.phone} <br />
		{#if address.fax}
			FAX: {address.phone} <br />
		{/if}
		{address.address}
	</div>
{/snippet}

<div class="grid grid-cols-1 md:grid-cols-4 gap-y-golden-lg gap-x-golden-md">
	{#each addresses as address (address)}
		{@render makeAddressBlock(address)}
	{/each}
</div>
