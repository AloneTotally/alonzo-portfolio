<script lang="ts">
	import Modal from '$lib/Modal.svelte';
	import { fly } from 'svelte/transition';

	const compCerts = {
		'aio-2022': {
			name: 'Australian Informatics Olympiad 2022',
			photoURL: '../../cert-pics/aio-2022.JPG',
			caption: 'Bronze',
			link: 'https://aio.edu.au/'
		},
		'bebras-2022': {
			name: 'Bebras Computational Thinking Challenge 2022',
			photoURL: '../../cert-pics/bebras-2022.png',
			caption: 'Honorable mention',
			link: 'https://www.bebraschallenge.org/'
		},
		'cat-2022': {
			name: 'Computational And Algorithmic Thinking 2021',
			photoURL: '../../cert-pics/cat-2022.JPG',
			caption: 'Participation',
			link: 'https://www.amt.edu.au/cat'
		},
		'drct-2021': {
			name: 'Design Thinking with Robotics and Computational Thinking 2021',
			photoURL: '../../cert-pics/drct-2021.JPG',
			caption: 'Gold',
			link: 'https://www.internationalolympiadacademy.com/olympiads/drct-design-thinking-with-robotics-and-computational-thinking'
		},
		'drct-global-finals-2021': {
			name: 'Design Thinking with Robotics and Computational Thinking Global Finals 2021',
			photoURL: '../../cert-pics/drct-global-finals-2021.jpg',
			caption: 'Silver',
			link: 'https://smo-testing.com/drctfinals/'
		},
		'perse-2022': {
			name: 'Perse Coding Team Challenge 2022',
			photoURL: '../../cert-pics/perse-2022.png',
			caption: 'Merit',
			link: 'https://pctc.perse.co.uk/'
		},
		'perse-2023': {
			name: 'Perse Coding Team Challenge 2023',
			photoURL: '../../cert-pics/perse-2023.png',
			caption: 'Distinction',
			link: 'https://pctc.perse.co.uk/'
		}
	};
	const courseCerts = {
		'cybersecurity-essentials': {
			name: 'Cybersecurity Essentials',
			photoURL: '../../cert-pics/cybersecurity-essentials.png',
			caption: 'Certificate of completion',
			link: 'https://www.netacad.com/courses/cybersecurity/cybersecurity-essentials'
		},
		'sololearn-go': {
			name: 'Sololearn - Go',
			photoURL: '../../cert-pics/sololearn-go.png',
			caption: 'Sololearn Course',
			link: 'https://www.sololearn.com/profile/25425602'
		},
		// 'sololearn-machinelearning': {
		// 	name: 'Sololearn - Machine Learning',
		// 	photoURL: '../../cert-pics/sololearn-machinelearning.png',
		// 	caption: 'Sololearn Course',
		// 	link: 'https://www.sololearn.com/profile/25425602'
		// },
		'sololearn-python': {
			name: 'Sololearn - Intermediate Python',
			photoURL: '../../cert-pics/sololearn-python.png',
			caption: 'Sololearn Course',
			link: 'https://www.sololearn.com/profile/25425602'
		}
	};
	const certs = {
		All: { ...courseCerts, ...compCerts },
		Courses: courseCerts,
		Competitions: compCerts
	};
	let modalPhoto = '';
	let showModal: boolean = false;
	const handleClick = (photoURL: string) => {
		showModal = true;
		modalPhoto = photoURL;
	};

	const sortNav = ['All', 'Courses', 'Competitions'];
	let currentGallery = certs.All;
	let currentNavItem = 'All';
	const sortCerts = (navItem: string) => {
		showMore = false;
		currentGallery = certs[navItem];
		currentNavItem = navItem;
	};
	let showMore = false;
	$: showing = showMore
		? Object.values(currentGallery)
		: Object.values(currentGallery).splice(0, 6);
</script>

<div class="text-white flex flex-col items-center text-lg scroll-mt-12" id="Certificates">
	<Modal bind:showModal>
		<img src={modalPhoto} alt="" class="h-5/6 w-auto" />
	</Modal>
	<h2 class="font-extrabold text-4xl mt-10">Certificates</h2>
	<span class="text-slate-400 mb-16">Certificates from competitions or courses</span>
	<div class="flex flex-row justify-start gap-10 w-10/12 mb-10 text-slate-400">
		<!-- TODO: Change colour of options when selected -->
		{#each sortNav as navItem}
			<button
				class=" transition-all duration-300 font-medium"
				on:click={() => sortCerts(navItem)}
				class:text-indigo-400={navItem == currentNavItem}
				class:hover:text-white={navItem != currentNavItem}
				>{navItem}
			</button>
		{/each}
	</div>
	<div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 w-10/12">
		{#each showing as cert}
			<button
				class=" bg-gray-800 text-left flex flex-col pb-5 rounded-xl hover:shadow-2xl hover:shadow-black hover:scale-105 transition-all duration-300 cursor-pointer card"
				transition:fly
			>
				<button
					on:click={() => handleClick(cert.photoURL)}
					class="relative photo flex justify-center items-center w-full"
				>
					<img src={cert.photoURL} alt="" class="w-auto h-full max-h-72 rounded-t-xl" />
				</button>
				<!-- <p class="absolute top-1/2 right-1/2 z-20">View image</p> -->
				<a
					href={cert.link}
					class="text-white text-xl font-semibold mx-3 mt-3 transition-colors duration-500 title hover:text-indigo-400"
					target="_blank"
					rel="external"
				>
					{cert.name}
				</a>
				<p class="text-base font-medium ml-3 text-slate-400">{cert.caption}</p>
			</button>
		{/each}
	</div>
	{#if Object.values(currentGallery).length > 6}
		<button
			class="rounded-lg bg-indigo-500 text-white py-2 px-6 mt-10 transition-all duration-200"
			on:click={() => (showMore = !showMore)}>{showMore ? 'Show less' : 'Show more'}</button
		>
	{/if}
</div>

<style>
	.photo::before {
		content: 'View Image';
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 500;
		text-align: center;
		position: absolute;
		bottom: 0;
		right: 0;
		transform: translate(0, -100%);
		background-color: black;
		z-index: 9;
		width: 100%;
		height: 100%;
		transform: translate(0px, 0px);
		opacity: 0%;
		transition: all;
		transition-duration: 300ms;
	}
	.photo:hover::before {
		opacity: 80%;
	}
</style>
