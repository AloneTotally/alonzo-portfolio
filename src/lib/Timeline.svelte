<script lang="ts">
	interface timelineObject {
		date: string;
		text: string;
		left: boolean;
	}
	export let timeline: timelineObject[];
	// {date: "frgth", text: 'textfdgf'}
</script>

<div class="text-white flex flex-col items-center justify-center text-lg w-full">
	<h2 class="font-extrabold text-4xl mt-10">My story</h2>
	<span class="text-slate-400 mb-16">A Timeline of my life</span>
</div>

<div class="relative">
	{#each timeline as element, i}
		{#if i % 2 == 0}
			<div class="flex flex-col justify-end items-end">
				<div class="flex flex-row items-stretch w-1/2">
					{#if i == 0}
						<div class="font-black text-slate-700 text-9xl absolute top-5 left-10">2023</div>
					{/if}
					<div class="flex flex-col">
						<div class="w-1 bg-indigo-600 mr-12 line h-1/2" />
						<div class="rounded-full w-5 h-5 bg-indigo-500 mr-10 -ml-2" />
						<div class="w-1 bg-indigo-600 mr-12 line h-1/2" />
					</div>
					<div class="flex flex-col max-w-5/12 mr-10 mt-10">
						<div class="font-bold text-5xl">{element.date}</div>
						<p class="text-left mb-10 max-h-10">{element.text}</p>
					</div>
				</div>
			</div>
		{:else}
			<div class="flex flex-col justify-start items-start">
				<div class="flex flex-row w-1/2 items-stretch ml-14">
					<div class="flex flex-col max-w-5/12 mr-10 mt-10">
						<div class="font-bold text-5xl">{element.date}</div>
						<p class="text-left mb-10">{element.text}</p>
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
