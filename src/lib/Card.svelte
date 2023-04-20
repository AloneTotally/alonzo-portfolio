<script lang="ts">
	export let title: string;
	export let description: string;
	export let photoURL: string;
	export let technologies: string[];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class=" bg-gray-800 flex flex-col pb-5 rounded-xl hover:shadow-2xl hover:shadow-black hover:scale-105 transition-all duration-300 cursor-pointer"
	on:click
>
	<img src={photoURL} alt="" class="w-full h-auto rounded-t-xl" />
	<p class="text-white text-3xl font-extrabold ml-3 mt-3">{title}</p>
	<p class="text-white max-w-fit ml-3 mt-2">
		{description}
	</p>
	<ul class="flex flex-row gap-2 flex-wrap mt-5 mx-3">
		{#each technologies as tech}
			<li class="text-gray-400 font-light font-mono text-xs">{tech}</li>
		{/each}
	</ul>
</div>
