<script>
	import Timeline from '$lib/Timeline.svelte';
	let timeline = [
		{
			header: '2023',
			pointsHeader: 'Competitions',
			points: [''],
			timePeriod: ''
		},
		{
			header: '2022',
			pointsHeader: 'Competitions',
			points: [
				'Computational and Algorithmic Thinking 2022',
				'Oxford University Computing Challenge 2022',
				'Perse Coding Team Challenge (Round 1)',
				'NOI 2022',
				'Perse Coding Team Challenge (Final Round)',
				'Australian Informatics Olympiad',
				'International Bebras Challenge'
			],
			timePeriod: ''
		}
	];
	console.log(timeline[0].points.length);
</script>

<div class="text-white flex flex-col items-center text-lg scroll-mt-10" id="Competitions">
	<h2 class="font-extrabold text-4xl mt-10">Competitions</h2>
	<span class="text-slate-400 mb-16">Competitions that I have participated in</span>
</div>

<Timeline {timeline} />
