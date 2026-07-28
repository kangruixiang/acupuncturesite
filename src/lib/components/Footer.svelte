<script lang="ts">
	import { Mail } from '@lucide/svelte';

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
			address: ' 4353 Midmost Drive Mobile, AL 36609'
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
	<div class="text-center">
		<span class="font-semibold text-lg">{address.city}</span> <br />
		{address.phone} <br />
		{#if address.fax}
			FAX: {address.phone} <br />
		{/if}
		{address.address}
	</div>
{/snippet}

<div class="italic">Four convenient locations on the Gulf Coast to serve you...</div>

<div class="flex space-x-golden-md my-golden-lg">
	{#each addresses as address (address)}
		{@render makeAddressBlock(address)}
	{/each}
</div>

<div class="text-xs text-center">
	© 2006-2026 BY CHINESE ACUPUNCTURE ASSOCIATES ON THE GULF COAST: MOBILE, BILOXI, PENSACOLA, & FORT
	WALTON BEACH
</div>

<div class="mt-4 justify-end items-center text-xs text-right flex gap-x-2">
	Made by Kang.
	<a href="mailto:kangruixiang@gmail.com"><Mail size={16} /></a>
</div>
