<script>
	import Card from '$lib/Card.svelte';

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
</script>

<div class="text-white flex flex-col items-center text-lg scroll-mt-10" id="projects">
	<h2 class="font-extrabold text-4xl mt-10">Projects</h2>
	<span class="text-slate-400 mb-16">My projects</span>
	<div class="grid grid-cols-3 gap-2 w-10/12">
		<!-- TODO: THIS PART NOT FINISHED -->
		{#each cardData as card}
			<Card title={card.title} description={card.description} />
		{/each}
	</div>
</div>
