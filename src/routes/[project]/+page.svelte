<script>
	import { page } from '$app/stores';
	import { projectInfo } from '$lib/stores';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';
	import rebotDashboard from '$lib/assets/rebotDashboard.png';
	import Grid from '$lib/Grid.svelte';
	console.log(get(projectInfo));
	const name = $page.params.project;
	console.log(name);
	let rows = 0;
	let columns = 0;
	let loadIndex = 0;

	const setRowsColumns = () => {
		rows = Math.floor(window.innerHeight / 60);
		columns = Math.floor((window.innerWidth - 5) / 60);
		console.log('window width and height:', window.innerWidth, window.innerHeight);
	};
	var startGridAnimation = false;
	onMount(() => {
		setRowsColumns();
		setTimeout(() => {
			startGridAnimation = true;
		}, 100);
	});

	try {
		window.onresize = () => {
			console.log('window resized');
			setRowsColumns();
		};
	} catch (error) {}
</script>

<body class="bg-slate-800 w-screen h-screen mt-10 ml-10">
	<Grid {rows} {columns} {startGridAnimation} bind:loadIndex />

	<div class="text-white font-bold text-4xl">{get(projectInfo).title}</div>
	<div class="text-white mt-10">{get(projectInfo).description}</div>
	<div class="text-white font-bold">AAAAAAAAAA</div>
	<img src={rebotDashboard} alt="" />
</body>

<style>
	:root {
		--rows: 0;
		--columns: 0;
	}
</style>
