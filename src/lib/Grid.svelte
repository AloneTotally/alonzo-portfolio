<script lang="ts">
	import { onMount } from 'svelte';
	export let rows = 0;
	export let columns = 0;
	export let startGridAnimation = false;
	export let loadIndex: number;
	let numSquares = 0;
	$: {
		try {
			// @ts-ignore
			document.getElementById('wrapper').style.zIndex = 10;
			// @ts-ignore
			document.getElementById('wrapper').hidden = false;
		} catch (error) {}
		handleClick(loadIndex);
	}
	$: {
		numSquares = rows * columns;
		console.log('Num squares', numSquares);
		try {
			// @ts-ignore
			document.documentElement.style.setProperty('--rows', rows);
			// @ts-ignore
			document.documentElement.style.setProperty('--columns', columns);
			console.log('set property for widths and columns', rows, columns, startGridAnimation);
		} catch (error) {
			console.log('lol');
		}
	}
	import anime from '../../node_modules/animejs/lib/anime.es.js';
	let toggled = false;
	const handleClick = (index: number) => {
		try {
			toggled = !toggled;
			console.log(index);
			anime({
				targets: '.tile', // thing to animate
				opacity: toggled ? 0 : 1,
				delay: anime.stagger(25, {
					grid: [columns, rows],
					from: index
				})
			});
		} catch {}
	};

	const loadAnimation = () => {
		let index;
		if (rows % 2 == 1) {
			index = Math.floor((rows * columns) / 2);
			console.log(index, 'odd');
		} else {
			index = Math.floor((rows * columns) / 2 + columns / 2);
			console.log(index, 'even');
		}
		console.log('grid started');
		const tileCount = document.getElementsByClassName('tile').length;
		console.log(tileCount, rows * columns);

		// while (tileCount != rows * columns) {
		// 	setTimeout(() => {
		// 		console.log(tileCount, rows * columns);
		// 	}, 10);
		// }
		anime({
			targets: '.tile', // thing to animate
			opacity: 0,
			delay: anime.stagger(75, {
				grid: [columns, rows],
				from: index
				// easing: 'easeInQuad'
			}),
			changeComplete: () => {
				console.log('changecomplete');

				// @ts-ignore
				document.getElementById('wrapper').style.zIndex = -1;
				// @ts-ignore
				document.getElementById('wrapper').hidden = true;
			}
		});
	};

	$: {
		console.log(`startGridAnimation: ${startGridAnimation}, `);
		if (startGridAnimation) {
			loadAnimation();
		}
	}
</script>

<div id="wrapper" class="fixed inset-0 z-10 grid gap-0">
	{#each Array.from(Array(numSquares).keys()) as i}
		<div
			class="min-w-[60px] min-h-[60px] tile bg-slate-900 m-0 opacity-100"
			on:click={() => handleClick(i)}
			on:keydown={() => console.log('hi')}
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
