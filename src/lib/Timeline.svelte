<script lang="ts">
	// {date: "frgth", text: 'textfdgf'}
	let timeline = [
		{
			header: 'School Of Science And Technology, Singapore',
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
	class="text-white flex flex-col items-center justify-center text-lg w-full scroll-mt-10"
	id="roadmap"
>
	<h2 class="font-extrabold text-4xl mt-10">Education</h2>
	<span class="text-slate-400 mb-16">A timeline of my education</span>
</div>

<div class="relative">
	{#each timeline as element, i}
		{#if i % 2 == 0}
			<div class="flex flex-col justify-end items-end">
				<div class="flex flex-row items-stretch w-1/2">
					<!-- {#if i == 0}
						<div class="font-black text-slate-700 text-9xl absolute top-5 left-10">2023</div>
					{/if} -->
					<div class="flex flex-col">
						<div class="w-1 bg-indigo-600 mr-12 line h-1/2" />
						<div class="rounded-full w-5 h-5 bg-indigo-500 mr-10 -ml-2" />
						<div class="w-1 bg-indigo-600 mr-12 line h-1/2" />
					</div>
					<div class="flex flex-col max-w-5/12 mr-10 mt-10">
						<div class="font-bold text-2xl">{element.header}</div>
						<div class="font-bold text-slate-400">{element.timePeriod}</div>
						<div class="font-bold mt-3">Leadership</div>
						<ul class="list-disc list-inside">
							{#each element.points as point}
								<li>{point}</li>
							{/each}
						</ul>
						<!-- <p class="text-left mb-10 max-h-10">{element.text}</p> -->
					</div>
				</div>
			</div>
		{:else}
			<div class="flex flex-col justify-start items-start">
				<div class="flex flex-row w-1/2 items-stretch ml-14 justify-end">
					<div class="flex flex-col max-w-5/12 mr-10 mt-10">
						<div class="font-bold text-2xl">{element.header}</div>
						<div class="font-bold text-slate-400">{element.timePeriod}</div>
						<div class="font-bold mt-3">Leadership</div>
						<ul class="list-disc list-inside">
							{#each element.points as point}
								<li>{point}</li>
							{/each}
						</ul>
					</div>
					<div class="flex flex-col mr-1">
						<div class="w-1 bg-indigo-600 mr-12 line h-1/2" />
						<div class="rounded-full w-5 h-5 bg-indigo-500 mr-10 -ml-2" />
						<div class="w-1 bg-indigo-600 mr-12 line h-1/2" />
					</div>
				</div>
			</div>
		{/if}
	{/each}
</div>
