<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<div
	class="bg-slate-800 pb-5 rounded-xl flex flex-col hover:shadow-2xl hover:shadow-black hover:scale-105 transition-all"
>
	<img src="https://picsum.photos/400/300" alt="" class="max-w-full h-auto rounded-t-xl" />
	<p class="text-white text-3xl font-extrabold ml-3 mt-3">{title}</p>
	<p class="text-white max-w-fit ml-3 mt-2">
		{description}
	</p>
</div>
