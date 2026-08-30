<script lang="ts">
	const providers: { name: string; pic: string; info?: string }[] = [
		{
			name: 'Xue Cui Xiang, OMD (retired)',
			pic: 'xue.jpg'
		},
		{
			name: 'Peter Zhang, DC (retired)',
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
			name: 'Bin Wang, OMD',
			pic: 'bin.jpg'
		},
		{
			name: 'Lei Zhang, AP',
			pic: 'lei.jpg'
		}
	];
</script>

<div class=" bg-primary-muted/10">
	<div
		class="text-lg bg-primary-muted p-golden-lg prose max-w-none hidden md:visible items-center justify-center text-right"
	></div>

	<div class="grid grid-cols-2 pb-20 gap-y-golden-2xl">
		<div
			class="col-span-2 p-golden-xl md:p-golden-2xl bg-primary-muted dark:text-base-content text-base-300 prose max-w-none"
		>
			<p>
				Meet the professional staff at Chinese Acupuncture Association on the Gulf Coast. All of our
				TCM physicians were specifically trained in China and are licensed and NCCAOM certified in
				USA.
			</p>
		</div>
		{#each providers as provider (provider.name)}
			<div class="flex flex-col items-center gap-y-golden-md">
				<div>
					<img class="rounded-sm" src={provider.pic} alt="" />
				</div>
				<div class="text-center text-sm md:text-base">
					<span class="md:text-lg font-semibold"> {provider.name}</span> <br />
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
