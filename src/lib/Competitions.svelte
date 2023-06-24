<script>
	import Timeline from '$lib/Timeline.svelte';
	let timeline = [
		{
			header: '2023',
			pointsHeader: 'Competitions',
			points: [
				{ text: 'Perse Coding Team Challenge (Round 1)', caption: 'Distinction' },
				{
					text: 'International Mathematical Modelling Challenge 2023',
					caption: 'Certificate of Commendation'
				},
				{ text: 'Perse Coding Team Challenge (Final Round)', caption: 'Distinction' }
			],
			timePeriod: ''
		},
		{
			header: '2022',
			pointsHeader: 'Competitions',
			points: [
				{ text: 'Computational and Algorithmic Thinking 2022', caption: 'Participation' },
				{ text: 'Oxford University Computing Challenge 2022', caption: 'Silver' },
				{ text: 'Perse Coding Team Challenge (Round 1)', caption: 'Merit' },
				{ text: 'National Olympiad Of Informatics 2022', caption: '' },
				{ text: 'Perse Coding Team Challenge (Final Round)', caption: 'Merit' },
				{ text: 'Australian Informatics Olympiad 2022', caption: 'Bronze' },
				{ text: 'Bebras Computational Thinking Challenge', caption: 'Honorable Mention' }
			],
			timePeriod: ''
		},
		{
			header: '2021',
			pointsHeader: 'Competitions',
			points: [
				{
					text: 'Design Thinking with Robotics and Computational Thinking International Competition',
					caption: 'Gold'
				},
				{ text: 'Script It Right Chinese Radio Drama Script Writing Competition', caption: '' },
				{
					text: 'Design Thinking With Robotics and Computational Thinking Global Finals 2021',
					caption: 'Silver'
				}
			],
			timePeriod: ''
		},
		{
			header: '2020',
			pointsHeader: 'Competitions',
			points: [
				{ text: 'Singapore and Asian Schools Math Olympiad', caption: '' },
				{ text: 'Computational and Algorithmic Thinking (CAT)', caption: '' },
				{ text: 'Oxford University Computing Challenge (Challenge Round)', caption: '' }
			],
			timePeriod: ''
		}
	];
	console.log(timeline[0].points.length);
</script>

<div class="text-white flex flex-col items-center text-lg scroll-mt-12" id="Competitions">
	<h2 class="font-extrabold text-4xl mt-10">Competitions</h2>
	<span class="text-slate-400 mb-16">Competitions that I have participated in</span>
</div>

<Timeline {timeline} />
