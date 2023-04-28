<script lang="ts">
	import '../../app.css';
	const nav = ['Projects', 'Education', 'Competitions', 'Certificates', 'Contacts'];
	function isInViewport(element: HTMLElement) {
		const rect = element.getBoundingClientRect();
		return rect.bottom >= 100;
	}
	let elementInView = '';
	const checkElementInView = () => {
		for (let i = 0; i < nav.length; i++) {
			const element = document.getElementById(nav[i]);

			if (isInViewport(element)) {
				elementInView = nav[i];
				console.log(elementInView);

				break;
			}
		}
	};
</script>

<slot />
<svelte:document on:scroll={checkElementInView} />
<nav
	class="bg-slate-900 w-screen fixed top-0 h-20 text-white flex items-center px-5 justify-between border-gray-700 border-b"
>
	<div class="flex flex-row">
		<button
			on:click={() =>
				window.scroll({
					top: 0,
					left: 0,
					behavior: 'smooth'
				})}><img class=" w-16 h-auto" src="../../favicon.png" alt="Alonzo Puah" /></button
		>
	</div>
	<div class="md:flex gap-10 items-center ml-auto pr-10 font-medium text-slate-400 hidden">
		{#each nav as navitem}
			<div class="flex flex-col h-full relative">
				<a
					class=" hover:text-white transition-all duration-300 wrapper"
					class:text-indigo-400={elementInView == navitem}
					href="#{navitem}"
				>
					{navitem}
				</a>
			</div>
		{/each}
	</div>
</nav>

<style>
	.wrapper::after {
		content: '';
		bottom: -15px;
		position: absolute;
		height: 5px;
		background-color: #6366f1;
		left: 0px;
		transition-duration: 300ms;
		transition-property: all;
		width: 0%;
	}
	.wrapper:hover:after {
		width: 100%;
	}
</style>
