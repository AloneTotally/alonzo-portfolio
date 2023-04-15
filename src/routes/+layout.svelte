<script>
	import '../app.css';
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
	<div class="flex gap-5 items-center ml-auto pr-10">
		<a href="#projects">Projects</a>
		<a href="#roadmap">Roadmap</a>
	</div>
</nav>
