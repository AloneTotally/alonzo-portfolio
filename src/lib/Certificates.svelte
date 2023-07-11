<script lang="ts">
	import Modal from '$lib/Modal.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { compCerts } from './stores';

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
	const otherCerts = {
		'co-curriculum-certificate-2023': {
			name: 'Co-Curriculum Certificate 2023',
			photoURL: '../../cert-pics/Co-Curriculum-Certificate.jpg',
			caption: 'From school',
			link: '../../cert-pics/Co-Curriculum-Certificate.pdf'
		}
	};
	const certs = {
		All: { ...otherCerts, ...compCerts, ...courseCerts },
		Competitions: compCerts,
		Courses: courseCerts,
		Others: otherCerts
	};
	let modalPhoto = '';
	let showModal: boolean = false;
	const handleClick = (photoURL: string) => {
		showModal = true;
		modalPhoto = photoURL;
	};

	const sortNav = ['All', 'Competitions', 'Courses', 'Others'];
	let currentGallery = certs.All;
	let currentNavItem = 'All';
	const sortCerts = (navItem: string) => {
		showMore = false;
		currentGallery = certs[navItem];
		currentNavItem = navItem;
	};
	let showMore = false;
	let showing = Object.values(currentGallery).splice(0, 8);
	$: showing = showMore
		? Object.values(currentGallery)
		: Object.values(currentGallery).splice(0, 8);
	let elementOnceList: HTMLElement[] = new Array(showing.length);
	let displayList: boolean[] = new Array(showing.length);
	displayList.fill(false);
</script>

<div class="text-white flex flex-col items-center text-lg scroll-mt-12" id="Certificates">
	<Modal bind:showModal>
		<img src={modalPhoto} alt="" class="w-5/6 h-auto md:h-5/6 md:w-auto" />
	</Modal>
	<h2 class="font-extrabold text-4xl mt-10">Certificates</h2>
	<span class="text-slate-400 mb-16">Certificates from competitions, courses or school</span>
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

						<p
							class="md:text-base text-sm ml-3
							{cert.caption == 'Bronze'
								? 'text-orange-400 font-bold'
								: cert.caption == 'Silver' || cert.caption == 'Merit'
								? 'text-gray-300 font-bold'
								: cert.caption == 'Gold' || cert.caption == 'Distinction'
								? 'text-yellow-300 font-bold'
								: 'text-slate-400 font-medium'}"
						>
							{cert.caption}
						</p>
					</div>
				</button>
			</IntersectionObserver>
		{/each}
	</div>
	{#if Object.values(currentGallery).length > 8}
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
