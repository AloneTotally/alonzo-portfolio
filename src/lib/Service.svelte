<script lang="ts">
	import Modal from '$lib/Modal.svelte';
	import Card from './Card.svelte';
	let showModal: boolean = false;
	let serviceProjects = [
		{
			title: 'Python In Five',
			longDescription:
				'In 2022, my class conducted a 5 hour python workshop, Python in Five, in collaboration with the Buona Vista Youth Network. I was one of the lead instructors there and I helped to plan out the slides and the curriculum. We had two runs of the workshop on 13 March and 16 March, and had multiple dry runs to prepare for the workshop. We had around 60 participants in total, including the dry runs and the event runs, and had positive feedback from the students.',
			shortDescription:
				'A 5 hour python workshop carried out by my class in collaboration with the Buona Vista Youth Network',
			image: '../serviceprojects/pi5-teaching.jpg',
			images: [
				'../serviceprojects/pi5-assist.jpg',
				'../serviceprojects/pi5-teaching.jpg',
				'../serviceprojects/pi5-teaching2.jpg'
			]
		}
	];
	let currentModal = serviceProjects[0];
</script>

<div class="text-white flex flex-col items-center text-lg scroll-mt-12">
	<Modal bind:showModal>
		<div class="w-11/12 sm:w-9/12 h-10/12 rounded-3xl flex flex-col items-center">
			<h2 class="font-extrabold text-4xl mb-10">{currentModal.title}</h2>
			<p class="text-base sm:text-lg">{currentModal.longDescription}</p>
			<div class="flex flex-row flex-wrap items-center mt-10 justify-center">
				{#each currentModal.images as image}
					<img src={image} alt="teaching" class="h-28 sm:h-36 lg:h-60 w-auto" />
				{/each}
			</div>
		</div>
	</Modal>

	<h2 class="font-extrabold text-4xl mt-10">Service</h2>
	<span class="text-slate-400 mb-16">Service learning projects that I did in school</span>
	<div class="lg:grid lg:grid-cols-3 md:flex md:flex-col gap-3 w-10/12">
		{#each serviceProjects as project}
			<Card
				title={project.title}
				description={project.shortDescription}
				photoURL={project.image}
				technologies={[]}
				extra={''}
				on:click={() => {
					showModal = !showModal;
					currentModal = project;
				}}
			/>
		{/each}
	</div>
</div>
