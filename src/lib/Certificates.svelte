<script lang="ts">
	import Modal from '$lib/Modal.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';

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
		'immc-2023': {
			name: 'International Mathematical Modeling Challenge (IM²C)',
			photoURL: '../../cert-pics/immc-2023.jpg',
			caption: 'Certificate of Commendation',
			link: 'https://www.immchallenge.org/'
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
		},
		'apple-teacher': {
			name: 'Recognition as an Apple teacher',
			photoURL: '../../cert-pics/apple-teacher.png',
			caption: 'Certificate of recognition',
			link: 'https://education.apple.com/en'
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
	let showing = Object.values(currentGallery).splice(0, 6);
	$: showing = showMore
		? Object.values(currentGallery)
		: Object.values(currentGallery).splice(0, 6);
	let elementOnceList: HTMLElement[] = new Array(showing.length);
	let displayList: boolean[] = new Array(showing.length);
	displayList.fill(false);
</script>

<div class="text-white flex flex-col items-center text-lg scroll-mt-12" id="Certificates">
	<Modal bind:showModal>
		<img src={modalPhoto} alt="" class="w-5/6 h-auto md:h-5/6 md:w-auto" />
	</Modal>
	<h2 class="font-extrabold text-4xl mt-10">Certificates</h2>
	<span class="text-slate-400 mb-16">Certificates from competitions or courses</span>
	<div class="flex flex-row justify-start gap-10 w-10/12 mb-10 text-slate-400">
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
	<div class="md:grid xl:grid-cols-4 lg:grid-cols-3 flex-col gap-3 w-10/12">
		{#each showing as cert, i}
			<IntersectionObserver
				threshold={0.2}
				element={elementOnceList[i]}
				on:observe={(e) => {
					// console.log(e.detail); // IntersectionObserverEntry
					// console.log(e.detail.isIntersecting); // true | false

					displayList[i] = e.detail.isIntersecting;
				}}
			>
				<button
					bind:this={elementOnceList[i]}
					class="opacity-0 bg-gray-800 text-left flex flex-row lg:flex-col pb-5 mt-3 rounded-xl hover:shadow-2xl hover:shadow-black hover:scale-105 transition-all duration-700 cursor-pointer card w-full -translate-x-10 blur"
					class:opacity-100={displayList[i]}
					class:blur-none={displayList[i]}
					class:-translate-x-10={!displayList[i]}
				>
					<button
						on:click={() => handleClick(cert.photoURL)}
						class="relative photo flex justify-center items-center lg:w-full w-2/6 h-40"
					>
						<img
							src={cert.photoURL}
							alt=""
							class="lg:w-auto lg:h-full lg:max-h-60 w-auto max-h-full rounded-t-xl"
						/>
					</button>
					<div class="flex flex-col gap-1 lg:w-11/12 w-7/12">
						<a
							href={cert.link}
							class="text-white md:text-xl text-lg font-semibold mx-3 mt-3 transition-colors duration-500 title hover:text-indigo-400 w-full"
							target="_blank"
							rel="external"
						>
							{cert.name}
						</a>

						<p class="md:text-base text-sm font-medium ml-3 text-slate-400">{cert.caption}</p>
					</div>
				</button>
			</IntersectionObserver>
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
