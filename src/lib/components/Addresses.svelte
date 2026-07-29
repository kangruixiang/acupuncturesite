<script lang="ts">
	import { MapPin } from '@lucide/svelte';

	type Address = {
		city: string;
		phone: string;
		fax?: string;
		address: string;
	};

	const addresses: Address[] = [
		{
			city: 'Pensacola, FL',
			phone: '850-479-3489',
			address: '2254 Olive Road Pensacola, FL 32514'
		},
		{
			city: 'Fort Walton Beach, FL',
			phone: '850-864-1688',
			address: '51 Beal Pkwy NE Fort Walton Beach, FL 32548'
		},
		{
			city: 'Mobile, AL',
			phone: '251-341-4507',
			fax: '251-343-6666',
			address: '4353 Midmost Drive Mobile, AL 36609'
		},
		{
			city: 'Biloxi, MS',
			phone: '228-385-7794',
			fax: '228-385-3838',
			address: '2318 E. Pass Road Biloxi, MS 39531'
		}
	];
</script>

{#snippet makeAddressBlock(address: Address)}
	<div class="text-center group">
		<div class="font-semibold text-lg flex items-center justify-center gap-x-golden-sm">
			{address.city}
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

<div class="flex space-x-golden-md">
	{#each addresses as address (address)}
		{@render makeAddressBlock(address)}
	{/each}
</div>
