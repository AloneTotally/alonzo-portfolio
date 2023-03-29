<script lang="ts">
	interface timelineObject {
		date: string;
		text: string;
	}
	export let timeline: timelineObject[];
	// {date: "frgth", text: 'textfdgf'}
</script>

<div class="text-white flex flex-col items-center text-lg">
	<h2 class="font-extrabold text-4xl mt-10">My story</h2>
	<span class="text-slate-400">A Timeline of my life</span>
</div>
<div>
	{#each timeline as element}
		<div class="flex flex-row w-full items-stretch">
			<div class="flex flex-col">
				<div class="w-1 bg-indigo-600 mx-12 line h-1/2" />
				<div class="rounded-full w-5 h-5 bg-indigo-500 mx-10" />
				<div class="w-1 bg-indigo-600 mx-12 line h-1/2" />
			</div>
			<div class="flex flex-col max-w-5/12 mr-10 mt-10">
				<div class="font-bold text-5xl">{element.date}</div>
				<p class="text-left mb-10">{element.text}</p>
			</div>
		</div>
	{/each}
</div>
