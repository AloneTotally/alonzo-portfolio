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
	import anime from '../../node_modules/animejs/lib/anime.es.js';
	let toggled = true;

	const handleClick = (index) => {
		toggled = !toggled;
		anime({
			targets: '.tile', // thing to animate
			opacity: toggled ? 0 : 1,
			delay: anime.stagger(50, {
				grid: [columns, rows],
				from: index
			})
		});
	};
</script>

<div id="wrapper" class="absolute inset-0 z-10 grid gap-0">
	{#each Array.from(Array(numSquares).keys()) as i}
		<div
			class="min-w-[75px] min-h-[75px] tile bg-slate-900 hover:bg-slate-800 m-0 cursor-pointer"
			on:click={() => handleClick(i)}
			on:keydown={() => console.log('keydown')}
		/>
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
		grid-template-columns: repeat(var(--columns), 1fr);
		grid-template-rows: repeat(var(--rows), 1fr);
	}
	.tile {
		border: 0.5px solid #4f46e5;
	}
</style>
