<script>
	// {date: "frgth", text: 'textfdgf'}
	import Timeline from '$lib/Timeline.svelte';
	let timeline = [
		{
			header: 'School Of Science And Technology, Singapore',
			pointsHeader: 'Leadership',
			points: [
				'B-Division Floorball captain (2022-2023)',
				'C-Division Floorball vice-captain (2021-2022)',
				'S2 Class vice-chairperson (2021-2022)',
				'S1 Class vice-chairperson (2020-2021)'
			],
			timePeriod: '2020-2023'
		},
		{
			header: 'West Spring Primary School',
			pointsHeader: 'Leadership',
			points: [
				'Prefect (2018-2019)',
				'Trainee prefect (2017-2018)',
				'Class vice-monitor (2015-2016)'
			],
			timePeriod: '2014-2019'
		}
	];
</script>

<div
	class="text-white flex flex-col items-center justify-center text-lg w-full scroll-mt-12"
	id="Education"
>
	<h2 class="font-extrabold text-4xl mt-10">Education</h2>
	<span class="text-slate-400 mb-16">A timeline of my education</span>
</div>

<Timeline {timeline} />
