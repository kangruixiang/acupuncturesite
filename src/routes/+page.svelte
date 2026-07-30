<script lang="ts">
	import Addresses from '$lib/components/Addresses.svelte';
	import Conditions from '$lib/components/Conditions.svelte';
	import Slide from '$lib/components/Slide.svelte';
</script>

<Slide />
<div
	class="bg-primary-muted/80 border-primary-muted2 border-y-4 py-golden-lg px-golden-md text-base-300 dark:text-base-content"
>
	<div class="italic mb-golden-md mx-golden-md">
		Four convenient locations on the Gulf Coast to serve you... <span
			><a href="/contact" class="link">see hours</a></span
		>
	</div>
	<Addresses />
</div>

<div class=" bg-primary-muted/10">
	<div class="p-golden-xl prose max-w-none">
		<h3>What is Acupuncture?</h3>

		<p>
			Acupuncture is an ancient Chinese technique of treating a disease or relieving pain by needle
			stimulation at certain key points on the human body. It has been practiced in China and the
			orient for at least 5000 years, and was authorized for treatment of illness in the USA by the
			U.S. Government (NIH) in 1997.
		</p>
	</div>
	<div class="p-golden-xl prose max-w-none bg-primary-muted/10">
		<h3>How Does Acupuncture Work?</h3>
		<p>
			According to the classical doctrine of TCM the life energy (Qi) from the major organs
			continuously flows along the circulatory channels throughout the human body. When a person is
			healthy, the energy flow is smooth and in balance. If the flow is blocked or disturbed, then a
			person will feel ill or pain. Acupuncture works by regulating the disturbed or imbalanced "Qi"
			flow to relieve pain or recover the patient from their illness. Modern medical scientists
			works by releasing narcotic-like substances such as endorphin or opioids from the spinal cord
			or brain to stop pain or rehabilitate the patient back to health.
		</p>
	</div>
	<div class="p-golden-xl prose max-w-none">
		<h3>How Does Traditional Chinese Medicine (TCM) Work?</h3>

		<p>
			The classical theory of treating a disease or relieving pain by TCM is similar to acupuncture
			therapy in many ways. Chinese herbal treatment works by chemically adjusting the disturbance
			or imbalance of "Qi" flow to recover patients from their diseases. Along with progress in
			science and technology, medical scientists have found that herbal medicine works by releasing
			biological bases such as atropine, ephedrine, and morphine, to cure a disease.
		</p>
		<p>
			Pharmacologists can now purify various kinds of biological bases from herbal compounds to
			formulate a wide variety of medications for the treatment of illness.
		</p>
	</div>

	<div class="p-golden-xl prose max-w-none bg-primary-muted/10 pb-10">
		<Conditions />
	</div>
</div>
