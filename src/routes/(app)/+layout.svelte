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
			if (isInViewport(document.getElementById(nav[i]))) {
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
	class="bg-slate-900 w-screen fixed top-0 h-20 text-white flex items-center px-5 justify-between border-gray-700 border-b pr-0 md:pr-10"
>
	<div class="flex flex-row">
		<button
			on:click={() =>
				window.scroll({
					top: 0,
					left: 0,
					behavior: 'smooth'
				})}
		>
			<img class=" w-16 h-auto" src="../../favicon.png" alt="Alonzo Puah" />
		</button>
	</div>
	<!-- TODO: IMPLEMENT NAV FOR SMALLER SCREENS -->
	<!-- Nav for wider screens -->
	<div
		class="flex items-end md:flex-row flex-col md:px-0 ml-auto font-medium text-slate-400 bg-slate-900 md:mt-0 md:top-5 top-6 right-5 absolute overflow-hidden h-10 hover:h-80 md:hover:h-10 navbar"
	>
		<div class="md:hidden md:mr-0 mr-5 mb-6">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 96 96"
				fill="none"
			>
				<g clip-path="url(#clip0_615_47)">
					<path d="M12 72H84V64H12V72ZM12 52H84V44H12V52ZM12 24V32H84V24H12Z" fill="white" />
				</g>
				<defs>
					<clipPath id="clip0_615_47">
						<rect width="96" height="96" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</div>
		{#each nav as navitem}
			<div class="flex flex-col items-center h-full relative pr-10 pl-10 md:px-5">
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
	<!-- Nav for smaller screens -->
	<!-- <button
		class="lg:hidden hover:h-fit max-h-6 overflow-hidden flex flex-col absolute right-0 top-0"
	>
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 96 96" fill="none">
			<g clip-path="url(#clip0_615_47)">
				<path d="M12 72H84V64H12V72ZM12 52H84V44H12V52ZM12 24V32H84V24H12Z" fill="white" />
			</g>
			<defs>
				<clipPath id="clip0_615_47">
					<rect width="96" height="96" fill="white" />
				</clipPath>
			</defs>
		</svg>
	</button> -->
	<!-- {#each nav as navitem}
		<div class="flex flex-col h-full relative">
			<a
				class=" hover:text-white transition-all duration-300 wrapper"
				class:text-indigo-400={elementInView == navitem}
				href="#{navitem}"
			>
				{navitem}
			</a>
		</div>
	{/each} -->
</nav>

<style>
	.wrapper::after {
		content: '';
		bottom: 20px;
		position: absolute;
		height: 5px;
		background-color: #6366f1;
		left: 0px;
		transition-duration: 300ms;
		transition-property: all;
		width: 0%;
	}
	@media (min-width: 768px) {
		.wrapper::after {
			bottom: 10px;
		}
	}
	.wrapper:hover:after {
		width: 100%;
	}

	.navbar {
		transition: height 400ms ease;
	}
</style>
