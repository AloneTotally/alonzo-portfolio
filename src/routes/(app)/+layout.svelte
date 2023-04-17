<script>
	import '../../app.css';
</script>

<slot />
<nav
	class="bg-slate-700 w-screen fixed top-0 h-16 text-white flex items-center px-5 justify-between"
>
	<div>
		<button
			on:click={() =>
				window.scroll({
					top: 0,
					left: 0,
					behavior: 'smooth'
				})}>Alonzo Puah</button
		>
	</div>
	<div class="flex gap-10 items-center ml-auto pr-10 font-medium text-slate-400">
		<div class="flex flex-col h-full relative">
			<a class=" hover:text-white transition-all duration-300 wrapper" href="#projects">Projects</a>
		</div>
		<div class="flex flex-col h-full relative">
			<a class=" hover:text-white transition-all duration-300 wrapper" href="#roadmap">Education</a>
		</div>
		<div class="flex flex-col h-full relative">
			<a class=" hover:text-white transition-all duration-300 wrapper" href="#competitions"
				>Competitions</a
			>
		</div>
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
