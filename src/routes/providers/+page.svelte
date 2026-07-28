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
			name: 'Bin Wang, AP',
			pic: 'bin.jpg'
		},
		{
			name: 'Nancy Xiang, AP',
			pic: 'nancy.jpg'
		},
		{
			name: 'Lei Zhang, AP',
			pic: 'lei.jpg'
		},
		{
			name: 'Yan Mei Fang, AP',
			pic: 'yan.jpg'
		}
	];
</script>

<div class="card card-body bg-primary-subtle/10">
	<div class="text-lg mt-10">
		<p>Meet the professional staff at Chinese Acupuncture Association on the Gulf Coast</p>

		<p>
			All of our TCM physicians were specifically trained in China and are Licensed and NCCAOM
			certified in USA
		</p>
	</div>

	<div class="grid grid-cols-2 gap-x-golden-lg gap-y-golden-2xl mt-10">
		{#each providers as provider (provider.name)}
			<div class="flex space-x-golden-md">
				<img class="rounded-sm" src={provider.pic} alt="" />
				<div class="mt-28">
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
