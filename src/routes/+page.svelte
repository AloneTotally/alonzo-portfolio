<script>
	import Aboutme from '$lib/Aboutme.svelte';
	import Projects from '$lib/Projects.svelte';
	import Grid from '$lib/Grid.svelte';
	import { onMount } from 'svelte';

	let rows = 0;
	let columns = 0;
	const setRowsColumns = () => {
		rows = Math.floor(document.body.clientHeight / 48);
		columns = Math.floor(document.body.clientWidth / 48);
		console.log('window width and height:', document.body.clientWidth, document.body.clientHeight);
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
	<Grid {rows} {columns} />
	<!-- <Aboutme />
	<Projects /> -->
</body>
