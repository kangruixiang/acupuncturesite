<script lang="ts">
	const conditions: { category: string; symptoms: string }[] = [
		{
			category: "Crohn's & Ulcerative Colitis",
			symptoms: 'We have been very successful treating this condition.'
		},
		{
			category: 'Digestive',
			symptoms:
				'Abdominal pain, Constipation, Chronic Diarrhea, Irritable Bowl Syndrome Hyperacidity, Indigestion, Ulcers.'
		},
		{
			category: 'Emotional',
			symptoms: 'Anxiety, Depression, Insomnia, Nervousness, Neurosis.'
		},
		{
			category: 'Eye-Ear-Nose-Throat',
			symptoms: 'Poor vision, Sinus Infection, Tinnitus, Ear Aches, Nervous Deafness.'
		},
		{
			category: 'Gynecological',
			symptoms:
				'Impotence, premenstrual syndrome (PMS), Menstrual Cramps, Irregular Menstrual Cycles, Infertility.'
		},
		{
			category: ' Uro-genital Disorders',
			symptoms: 'stress incontinence, urinary tract infections, and sexual dysfunction.'
		},
		{
			category: 'Musculoskeletal',
			symptoms:
				'arthritis, migraine headache, neuralgia, insomnia, soft tissue contusion, automobile injuries, whiplash, rotator cuff rupture, S-I joint tearing, joint twist, neck dystonia, myasthenia gravis, fibromyalgia, arthritis, osteoarthritis, osteoporosis, Tennis Elbow, joint pain.'
		},
		{
			category: 'Neurological',
			symptoms:
				"Headache, Migraines, Bell's Palsy,Post-op. Pain, Residual effects of stroke, Multiple Sclerosis, Parkinson's disease, Carpal Tunnel Syndrome, Syringomyelia, Myasthenia Gravis, Trigeminal Neuralgia."
		},
		{
			category: ' Respiratory',
			symptoms:
				'Asthma, Bronchitis, Common cold,  Chronic Cough, Allergies, Sinusitis, Smoking Cessation, Tonsillitis, emphysema.'
		},
		{
			category: 'Neck & Back Pain',
			symptoms:
				'stiff neck, whiplash, cervical disc bulging or herniation, nerve pinched, TOS, scoliosis, lower back pain, lumber disc bulging or herniation, sciatica, spinal canal stenosis, piriforms syndrome, neuropathy.'
		},
		{
			category: 'Gastrointestinal Disorders',
			symptoms:
				'food allergies, peptic ulcer, chronic diarrhea, constipation, indigestion, gastrointestinal weakness, anorexia and gastritis.'
		},
		{
			category: 'Circulatory Disorders',
			symptoms: ' hypertension, angina pectoris, arteriosclerosis and anemia .'
		},
		{
			category: ' Addictions',
			symptoms: ' alcohol, nicotine and drugs.'
		},
		{
			category: '  Other ',
			symptoms:
				' Psoriasis and other Skin Conditions, Viral Conditions: Hepatitis, Shingles, Influenza, Diabetes, High Blood pressure, Elevated Cholesterol, Stop Drug and Alcohol Abuse, Stop Smoking, Weight Control.'
		}
	];
</script>

<h3>Conditions Appropriate for Acupuncture Therapy</h3>

<div class="columns-2 gap-x-golden-lg">
	{#each conditions as condition (condition.category)}
		<div class="break-inside-avoid mb-golden-lg">
			<span class="font-semibold text-primary-highlight">{condition.category}</span>
			- {condition.symptoms}
		</div>
	{/each}
</div>
