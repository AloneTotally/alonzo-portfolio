<script>
	import Aboutme from '$lib/Aboutme.svelte';
	import Projects from '$lib/Projects.svelte';
	import Grid from '$lib/Grid.svelte';
	import { onMount } from 'svelte';

	let rows = 0;
	let columns = 0;
	const setRowsColumns = () => {
		rows = Math.floor(window.innerHeight / 75);
		columns = Math.floor((window.innerWidth - 5) / 75);
		console.log('window width and height:', window.innerWidth, window.innerHeight);
	};
	onMount(() => {
		setRowsColumns();
	});
	try {
		window.onresize = () => {
			console.log('window resized');
			setRowsColumns();
		};
	} catch (error) {}
</script>

<body class="bg-slate-900 flex flex-col justify-center content-center text-white">
	<div class="bg-indigo-600 flex justify-center items-center flex-col" id="hiddencontent">
		<!-- <div
			class="absolute bottom-2/3 right-1/2 translate-x-1/2 translate-y-3/4 text-5xl font-bold w-full text-center"
		>
			Hello. I am Alonzo Puah, a student in Singapore
		</div> -->
		<div class="text-5xl font-bold w-full text-center">
			Hello. I am Alonzo Puah, a student in Singapore
		</div>
		<button class="px-7 py-4 bg-slate-800 mt-10 text-lg font-light hover:bg-slate-700 "
			>View my stuff ↓</button
		>
	</div>
	<Grid {rows} {columns} />
	<Aboutme />
	<Projects />
</body>

<style>
	#hiddencontent {
		min-height: 100vh;
		min-width: 100vh;
	}
</style>
