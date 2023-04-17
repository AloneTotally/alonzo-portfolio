<script lang="ts">
	import Card from '$lib/Card.svelte';
	import { projectInfo } from '$lib/stores';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let cardData = [
		{
			title: 'CM project',
			description:
				'A forum website which is focused on questions that are environmentally related.',
			link: 'https://github.com/AloneTotally/cmproject-reMake'
		},
		{
			title: 'Rebot',
			description:
				'A website used to help the ease of communication between the ICT helpdesk and the students in a school (Not done)'
		},
		{
			title: 'Foodie',
			description:
				'My Secondary 4 computing+ coursework, which helps you decide what to eat judging by the locations near you',
			link: 'https://github.com/AloneTotally/JSAcompcoursework2023'
		},
		{
			title: 'This portfolio website :D',
			description: 'My portfolio website'
		}
	];
	const handleClick = (e: MouseEvent, title: string, description: string) => {
		let loadIndex = 0;
		let columns = Math.floor(window.innerHeight / 60);
		let rows = Math.floor((window.innerWidth - 5) / 60);
		let row = Math.floor((e.clientY / window.innerWidth) * rows);
		let column = Math.floor((e.clientX / window.innerHeight) * columns);

		loadIndex = row * rows + column;
		console.log(`(${row} - 1) * ${rows} + ${column} = ${loadIndex}`);
		console.log(loadIndex);

		$projectInfo = {
			title: title,
			description: description
		};
		console.log($projectInfo);

		// goto(`${title}`);

		dispatch('cardclicked', {
			loadIndex: loadIndex
		});
		console.log('event dispatched');
	};
</script>

<div class="text-white flex flex-col items-center text-lg scroll-mt-10" id="projects">
	<h2 class="font-extrabold text-4xl mt-10">Projects</h2>
	<span class="text-slate-400 mb-16">My projects</span>
	<div class="grid grid-cols-3 gap-3 w-10/12">
		<!-- TODO: THIS PART NOT FINISHED -->
		{#each cardData as card}
			<Card
				title={card.title}
				description={card.description}
				on:click={(e) => handleClick(e, card.title, card.description)}
			/>
		{/each}
	</div>
</div>
