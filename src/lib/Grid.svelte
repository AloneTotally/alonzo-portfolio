<script>
	export let rows = 0;
	export let columns = 0;
	export let startGridAnimation = false;
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
	let toggled = false;

	const handleClick = (index) => {
		toggled = !toggled;
		console.log(index);
		anime({
			targets: '.tile', // thing to animate
			opacity: toggled ? 0 : 1,
			delay: anime.stagger(75, {
				grid: [columns, rows],
				from: index
			})
		});
	};
	$: {
		if (startGridAnimation) {
			let index;
			if (rows % 2 == 1) {
				index = Math.floor((rows * columns) / 2).toString();
				console.log(index, 'odd');
			} else {
				index = Math.floor((rows * columns) / 2 + columns / 2).toString();
				console.log(index, 'even');
			}
			anime({
				targets: '.tile', // thing to animate
				opacity: 0,
				delay: anime.stagger(75, {
					grid: [columns, rows],
					from: index
					// easing: 'easeInQuad'
				}),
				changeComplete: () => {
					// @ts-ignore
					document.getElementById('wrapper').style.zIndex = -1;
					// @ts-ignore
					document.getElementById('wrapper').hidden = true;
				}
			});
		}
	}
</script>

<div id="wrapper" class="fixed inset-0 z-10 grid gap-0">
	{#each Array.from(Array(numSquares).keys()) as i}
		<div
			class="min-w-[60px] min-h-[60px] tile bg-slate-900 hover:bg-slate-800 m-0 cursor-pointer"
			on:click={() => handleClick(i)}
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
	/* .tile {
		border: 0.5px solid #4f46e5;
	} */
</style>
