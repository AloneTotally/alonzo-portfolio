<script lang="ts">
	export let title: string;
	export let description: string = '';
	export let photoURL: string;
	export let technologies: string[] = [];
	export let extra: string;
	import IntersectionObserver from 'svelte-intersection-observer';
	let element: HTMLElement;
	let display = false;
</script>

<IntersectionObserver
	{element}
	threshold={0.2}
	on:observe={(e) => {
		console.log(e.detail); // IntersectionObserverEntry
		console.log(e.detail.isIntersecting); // true | false
		display = e.detail.isIntersecting;
	}}
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="opacity-0 bg-gray-800 flex lg:flex-col flex-row lg:py-3 pb-3 rounded-xl hover:shadow-2xl hover:shadow-black hover:scale-105 transition-all duration-700 cursor-pointer card mb-3 blur"
		on:click
		class:opacity-100={display}
		class:blur-none={display}
		class:translate-x-10={!display}
		bind:this={element}
	>
		<div class="absolute bottom-2 right-3 text-gray-400 font-bold font-mono text-sm">{extra}</div>
		<div class="w-1/3 lg:w-full">
			<img src={photoURL} alt="" class="max-w-full h-auto rounded-t-xl" />
		</div>
		<div class="w-2/3 lg:w-full">
			<p
				class="text-white md:text-2xl text-lg font-bold ml-3 mt-3 transition-colors duration-500 title"
			>
				{title}
			</p>
			{#if description != ''}
				<p class="text-white max-w-fit ml-3 mt-2 text-base">
					{description}
				</p>
			{/if}
			{#if technologies.length > 0}
				<ul class="flex flex-row gap-2 flex-wrap mt-5 mx-3 text-sm md:text-base">
					{#each technologies as tech}
						<li class="text-gray-400 font-light font-mono text-xs">{tech}</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</IntersectionObserver>

<style>
	.card:hover .title {
		color: #818cf8;
	}
</style>
