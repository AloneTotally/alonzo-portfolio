<script>
	export let rows = 0;
	export let columns = 0;
	let numSquares = 0;
	$: {
		numSquares = rows * columns;
		console.log('Num squares', numSquares);
		try {
			// @ts-ignore
			document.documentElement.style.setProperty('--rows', rows);
			// @ts-ignore
			document.documentElement.style.setProperty('--columns', columns);
			console.log('set property for widths and columns', rows, columns);
		} catch (error) {
			console.log('lol');
		}
	}
	// $: style = `w-screen h-screen grid grid-cols-[repeat(${columns},_1fr)] grid-rows-[repeat(${rows},_1fr)]`;
	// const handleClick = (index) => {};
</script>

<div id="wrapper">
	{#each Array.from(Array(numSquares)) as i}
		<div class="w-[50px] h-[50px] border border-indigo-300" />
	{/each}
</div>

<style>
	:root {
		--rows: 0;
		--columns: 0;
	}
	#wrapper {
		min-height: 100vh;
		min-width: 100vh;
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		grid-template-rows: repeat(var(--rows), 1fr);
	}
</style>
