<script lang="ts">
	type Links = {
		name: string;
		url: string;
	};

	const militaryLinks: Links[] = [
		{
			name: 'Military Trains Doctors In Acupuncture',
			url: 'https://chineseacupuncturedoc.com/military-trains-doctors-in-acupuncture.htm'
		},
		{
			name: 'Acupuncture Treatments Relieves PTSD',
			url: 'http://www.naturalnews.com/032174_PTSD_acupuncture.html'
		},
		{
			name: " Military Pokes Holes In Acupuncture Skeptics' Theory",
			url: 'http://www.npr.org/2012/02/16/146944270/military-pokes-holes-in-acupuncture-skeptics-theory'
		},
		{
			name: 'Battlefield Acupuncture Introduced',
			url: 'http://www.military.com/features/0,15240,164071,00.html'
		},
		{
			name: 'Deploying Physicians to Use Acupuncture',
			url: 'http://www.naturalnews.com/035544_battlefield_acupuncture_painkillers_soldiers.html'
		}
	];

	const mainstreamLinks: Links[] = [
		{
			name: "Acupuncture Alters the Brain's Management of Pain",
			url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4270153/'
		},
		{
			name: ' Acupuncture Eases Low Back Pain: Patients Report More Pain Relief From Acupuncture Than Conventional Treatment',
			url: 'http://www.webmd.com/back-pain/news/20070924/study-acupuncture-eases-low-back-pain'
		},
		{
			name: 'Acupuncture is no placebo and does relieve pain, say scientists',
			url: 'http://www.dailymail.co.uk/health/article-1334288/Acupuncture-placebo-does-relieve-pain-say-scientists.html#ixzz16uIV5sQa'
		},
		{
			name: 'Acupuncture Treatment for Pain Management',
			url: 'https://cdmrp.health.mil/prmrp/research_highlights/22Mao_highlight.aspx'
		},
		{
			name: 'How Acupuncture Works From the Perspective of Western Medicine',
			url: 'https://www.aiam.edu/acupuncture/acupuncture-and-western-medicine/#:~:text=Acupuncture%20stimulates%20the%20body%27s%20production,migraines%20and%20carpal%20tunnel%20syndrome'
		}
	];
</script>

{#snippet makeListofLinks(links: Links[])}
	<ul>
		{#each links as link (link.name)}
			<li><a href={link.url}>{link.name}</a></li>
		{/each}
	</ul>
{/snippet}

<div class=" ">
	<div class="p-golden-xl prose max-w-none">
		<h3>How does Acupuncture Work?</h3>
		Neuroscientific basis underlying Acupuncture Analgesia.
		<a href="how-acupuncture-works.pdf"
			>Click here for special pdf report by Xue Cui Xiang OMD and Peter Zhang MD
		</a>
	</div>
	<div class="p-golden-xl prose max-w-none bg-primary-muted/10">
		<h3>The Military Embraces Acupuncture</h3>

		Use the links below to learn more about the way the military is using acupuncture treatment in
		military hospitals and for soldiers in Iraq and Afghanistan.

		{@render makeListofLinks(militaryLinks)}
	</div>

	<div class="p-golden-xl prose max-w-none pb-10">
		<h3>Acupuncture, an ancient therapy, hits the medical mainstream.</h3>

		Nearly 3,000 years ago, someone in China discovered that by inserting tiny needles into specific
		areas of the body, one's health could be restored. It's been working ever since. MORE

		{@render makeListofLinks(mainstreamLinks)}
	</div>
</div>
