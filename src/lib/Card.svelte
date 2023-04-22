<script lang="ts">
	export let title: string;
	export let description: string = '';
	export let photoURL: string;
	export let technologies: string[] = [];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class=" bg-gray-800 flex flex-col pb-5 rounded-xl hover:shadow-2xl hover:shadow-black hover:scale-105 transition-all duration-300 cursor-pointer card"
	on:click
>
	<img src={photoURL} alt="" class="w-full h-auto rounded-t-xl" />
	<p class="text-white text-2xl font-bold ml-3 mt-3 transition-colors duration-500 title">
		{title}
	</p>
	{#if description != ''}
		<p class="text-white max-w-fit ml-3 mt-2">
			{description}
		</p>
	{/if}
	{#if technologies.length > 0}
		<ul class="flex flex-row gap-2 flex-wrap mt-5 mx-3">
			{#each technologies as tech}
				<li class="text-gray-400 font-light font-mono text-xs">{tech}</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.card:hover .title {
		color: #818cf8;
	}
</style>
