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
		<div class="flex flex-row items-end">
			<div class="w-1 h-full bg-indigo-600" />
			<div class="flex flex-col min-w-5/12">
				<div class="font-bold text-5xl">{element.date}</div>
				<p class="text-right">{element.text}</p>
			</div>
		</div>
	{/each}
</div>
