<script lang="ts">
	const providers: { name: string; pic: string; info?: string }[] = [
		{
			name: 'Xue Cui Xiang, OMD',
			pic: 'xue.jpg'
		},
		{
			name: 'Peter Zhang, DC',
			pic: 'peter.jpg',
			info: 'Consultant, not licensed in Florida'
		},
		{
			name: 'Yan Mei Fang, AP',
			pic: 'yan.jpg'
		},

		{
			name: 'Nancy Xiang, AP',
			pic: 'nancy.jpg'
		},
		{
			name: 'Bin Wang, AP',
			pic: 'bin.jpg'
		},
		{
			name: 'Lei Zhang, AP',
			pic: 'lei.jpg'
		}
	];
</script>

<div class=" bg-primary-muted/10 grid grid-cols-12 gap-x-golden-lg">
	<div
		class="text-lg bg-primary-muted p-golden-lg prose max-w-none md:col-span-1 flex items-center justify-center text-right"
	></div>

	<div class="col-span-11 grid grid-cols-2 p-golden-xl pb-20 gap-y-golden-2xl">
		<div class="col-span-2 prose max-w-none text-lg">
			<p>Meet the professional staff at Chinese Acupuncture Association on the Gulf Coast.</p>
			<p>
				All of our TCM physicians were specifically trained in China and are licensed and NCCAOM
				certified in USA.
			</p>
		</div>
		{#each providers as provider (provider.name)}
			<div class="flex flex-col items-center gap-y-golden-md">
				<div>
					<img class="rounded-sm" src={provider.pic} alt="" />
				</div>
				<div class="text-center">
					<span class="text-lg font-semibold"> {provider.name}</span> <br />
					{#if provider.info}
						{provider.info}
					{:else}
						Licensed Acupuncture Physician
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
