<script lang="ts">
	import { addresses, type Address } from '$lib/addresses';

	const today = new Date().toLocaleDateString('en-US', {
		weekday: 'long'
	});
</script>

{#snippet makeAddressBlock(address: Address)}
	<div class="grid grid-cols-2 items-center p-golden-xl">
		<div class="text-right px-golden-2xl">
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
		<div class="border-l-2 border-primary-muted px-golden-md">
			{#each Object.entries(address.hours) as [day, hours] (day)}
				<div class:font-bold={day === today} class="grid grid-cols-2 gap-x-golden-md">
					<div>{day}</div>
					<div>{hours}</div>
				</div>
			{/each}
		</div>
	</div>
{/snippet}

<div class="bg-primary-muted/10 prose max-w-none">
	<div class="grid gap-y-golden-lg gap-x-golden-md">
		{#each addresses as address, i (address)}
			<div class={i % 2 === 0 ? '' : 'bg-primary-muted/10'}>
				{@render makeAddressBlock(address)}
			</div>
		{/each}
	</div>
</div>
