<script>
	import Card from '$lib/Card.svelte';

	let cardData = [
		{
			title: 'Example project',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aliquam quos, quae maxime nesciunt quo itaque ducimus soluta porro quam vel! Aliquam blanditiis quis, adipisci qui eum labore nisi optio!'
		},
		{
			title: 'Example project',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aliquam quos, quae maxime nesciunt quo itaque ducimus soluta porro quam vel! Aliquam blanditiis quis, adipisci qui eum labore nisi optio!'
		},
		{
			title: 'Example project',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aliquam quos, quae maxime nesciunt quo itaque ducimus soluta porro quam vel! Aliquam blanditiis quis, adipisci qui eum labore nisi optio!'
		}
	];
</script>

<div class="text-white flex flex-col items-center text-lg">
	<h2 class="font-extrabold text-4xl mt-10">Projects</h2>
	<span class="text-slate-400 mb-16">Personal projects that I have coded up/designed</span>
	<div class="grid grid-cols-2 gap-2 w-10/12">
		<!-- TODO: THIS PART NOT FINISHED -->
		{#each cardData as card}
			<Card title={card.title} description={card.description} />
		{/each}
	</div>
</div>
