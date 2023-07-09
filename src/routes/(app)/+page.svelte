<script>
	import Aboutme from '$lib/Aboutme.svelte';
	import Projects from '$lib/Projects.svelte';
	import Grid from '$lib/Grid.svelte';
	import Education from '$lib/Education.svelte';
	import Competitions from '$lib/Competitions.svelte';
	import Certificates from '$lib/Certificates.svelte';

	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import Contacts from '$lib/Contacts.svelte';
	import Service from '$lib/Service.svelte';

	let rows = 0;
	let columns = 0;
	let loadIndex = 0;
	const handleCardClicked = (/** @type {CustomEvent<any>} */ e) => {
		console.log('event received');

		loadIndex = e.detail.loadIndex;
		console.log(loadIndex);
		startGridAnimation = false;
		setTimeout(() => {
			goto(`${e.detail.title}`);
		}, 1000);
	};
	const setRowsColumns = () => {
		rows = Math.floor(window.innerHeight / 60);
		columns = Math.floor((window.innerWidth - 5) / 60);
		console.log('window width and height:', window.innerWidth, window.innerHeight);
	};
	var startGridAnimation = false;
	onMount(() => {
		setRowsColumns();
		const loading = document.getElementById('loading');
		loading?.addEventListener('animationiteration', () => {
			startGridAnimation = true;
		});
	});

	try {
		window.onresize = () => {
			console.log('window resized');
			setRowsColumns();
		};
	} catch (error) {}
</script>

<svelte:head>
	<meta property="og:image" content="https://alonzo-portfolio.vercel.app/preview.png" />
	<meta property="og:title" content="Alonzo's Portfolio - A student at SST" />
	<meta property="og:type" content="website" />
	<meta
		property="og:description"
		content="I am an SST student, a self-taught website developer and designer"
	/>
</svelte:head>

<main class="bg-slate-900 flex flex-col justify-center content-center text-white">
	{#if !startGridAnimation}
		<div
			class="loading-wrapper z-20 bg-slate-900 flex justify-center items-center"
			id="loading-wrapper"
			transition:fade
		>
			<div class="loading z-20 w-10 h-10 bg-slate-900" id="loading" transition:fade />
		</div>
	{/if}

	<button
		on:click={() =>
			window.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth'
			})}
		class="fixed z-10 bg-indigo-600 bottom-10 right-10 rounded-full w-10 h-10 text-center hover:bg-indigo-500 transition-colors duration-300"
	>
		&uparrow;
	</button>
	<!-- <div
		class="absolute bottom-2/3 right-1/2 translate-x-1/2 translate-y-3/4 text-5xl font-bold w-full text-center"
		>
		Hello. I am Alonzo Puah, a student in Singapore
	</div> -->
	<div class="custom-shape-divider-bottom-1681473540">
		<svg
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
		>
			<path
				d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
				class="fill-slate-900"
			/>
		</svg>
	</div>

	<Grid {rows} {columns} {startGridAnimation} bind:loadIndex />
	<Aboutme />
	<Projects on:cardclicked={(e) => handleCardClicked(e)} />
	<Service />
	<Education />
	<Competitions />
	<Certificates />
	<Contacts />
</main>

<style>
	.custom-shape-divider-bottom-1681473540 {
		position: absolute;
		bottom: -1px;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
		transform: rotate(180deg);
	}

	.custom-shape-divider-bottom-1681473540 svg {
		position: relative;
		display: block;
		width: 100vw;
		height: 75px;
	}

	.loading-wrapper {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		opacity: 100%;
	}
	.loading {
		/* position: fixed; */
		/* bottom: 50%;
		left: 50%;
		transform: translate(-50%, -50%); */
		/* 		background-color: #FFF; */
		border: 2px #fff solid;
		animation: loader 1s infinite ease-in-out;
	}
	@keyframes loader {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
