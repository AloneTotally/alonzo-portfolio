<script lang="ts">
	import Card from '$lib/Card.svelte';
	import { cardData } from '$lib/stores';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	const handleClick = (e: MouseEvent, title: string) => {
		let loadIndex = 0;
		let columns = Math.floor(window.innerHeight / 60);
		let rows = Math.floor((window.innerWidth - 5) / 60);
		let row = Math.floor((e.clientY / window.innerWidth) * rows);
		let column = Math.floor((e.clientX / window.innerHeight) * columns);

		loadIndex = row * rows + column;
		console.log(`(${row} - 1) * ${rows} + ${column} = ${loadIndex}`);
		console.log(loadIndex);

		// goto(`${title}`);

		dispatch('cardclicked', {
			loadIndex: loadIndex,
			title: title
		});
		console.log('event dispatched');
	};
</script>

<div class="text-white flex flex-col items-center text-lg scroll-mt-10" id="projects">
	<h2 class="font-extrabold text-4xl mt-10">Projects</h2>
	<span class="text-slate-400 mb-16">My projects</span>
	<div class="grid grid-cols-3 gap-3 w-10/12">
		<!-- TODO: THIS PART NOT FINISHED -->
		{#each Object.values(cardData) as card}
			<Card
				title={card.title}
				description={card.description}
				photoURL={card.photoURLs[0][0].slice(3)}
				on:click={(e) => handleClick(e, card.title)}
			/>
		{/each}
	</div>
</div>
