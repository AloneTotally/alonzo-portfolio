<script>
	import Aboutme from '$lib/Aboutme.svelte';
	import Projects from '$lib/Projects.svelte';
	import Grid from '$lib/Grid.svelte';
	import Timeline from '$lib/Timeline.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let rows = 0;
	let columns = 0;
	let timeline = [
		{
			date: '2016',
			text: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam. ',
			left: true
		},
		{
			date: '2016',
			text: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.',
			left: false
		},
		{
			date: '2016',
			text: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.',
			left: true
		},
		{
			date: '2016',
			text: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.',
			left: false
		},
		{
			date: '2016',
			text: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.',
			left: true
		},
		{
			date: '2016',
			text: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.',
			left: false
		}
	];
	const setRowsColumns = () => {
		rows = Math.floor(window.innerHeight / 60);
		columns = Math.floor((window.innerWidth - 5) / 60);
		console.log('window width and height:', window.innerWidth, window.innerHeight);
	};
	var startGridAnimation = false;
	onMount(() => {
		setRowsColumns();
		const loading = document.getElementById('loading');
		const loadingWrapper = document.getElementById('loading-wrapper');
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

<body class="bg-slate-900 flex flex-col justify-center content-center text-white">
	{#if !startGridAnimation}
		<div
			class="loading-wrapper z-20 bg-slate-900 flex justify-center items-center"
			id="loading-wrapper"
			transition:fade
		>
			<div class="loading z-20 w-10 h-10 bg-slate-900" id="loading" transition:fade />
		</div>
	{/if}
	<div class="bg-indigo-600 flex justify-center items-center flex-col" id="hiddencontent">
		<!-- <div
			class="absolute bottom-2/3 right-1/2 translate-x-1/2 translate-y-3/4 text-5xl font-bold w-full text-center"
		>
			Hello. I am Alonzo Puah, a student in Singapore
		</div> -->
		<div class="text-5xl font-bold w-full text-center">
			Hello. I am Alonzo Puah, a student in Singapore
		</div>
		<a class="px-7 py-4 bg-slate-800 mt-10 text-lg font-light hover:bg-slate-700 " href="#aboutme"
			>View my stuff &darr;</a
		>
	</div>
	<Grid {rows} {columns} {startGridAnimation} />
	<Aboutme />
	<Projects />
	<Timeline {timeline} />
</body>

<style>
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
		animation: loader 1.3s infinite ease-in-out;
	}
	@keyframes loader {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	#hiddencontent {
		min-height: 100vh;
		min-width: 100vh;
	}
</style>
