<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	// {date: "frgth", text: 'textfdgf'}
	interface Timeline {
		header: string;
		points: string[];
		pointsHeader: string;
		timePeriod: string;
	}
	export let timeline: Timeline[];

	// onMount(() => {
	let elementOnceList = new Array(timeline.length);
	let displayList = new Array(timeline.length);
	displayList.fill(false);

	let smallElementOnceList = new Array(timeline.length);
	let smallDisplayList = new Array(timeline.length);
	smallDisplayList.fill(false);

	// });
	// timelinelist = new Array(timeline.length);
	// timelinelist.fill(false);

	// function isInViewport(element: HTMLElement) {
	// 	try {
	// 		const rect = element.getBoundingClientRect();
	// 		return rect.bottom >= 100;
	// 	} catch (error) {
	// 		return false;
	// 	}
	// }

	// const checkElementInView = () => {
	// 	for (let i = 0; i < timelinelist.length; i++) {
	// 		let element: HTMLElement = document.getElementById(i.toString());

	// 		if (isInViewport(element)) {
	// 			timelinelist[i] = true;
	// 			console.log(timelinelist);
	// 		}
	// 	}
	// };
</script>

<div class="relative hidden sm:block">
	{#each timeline as element, i}
		{#if i % 2 == 0}
			<div class="flex flex-col justify-end items-end">
				<div class="flex flex-row items-stretch w-1/2">
					<!-- {#if i == 0}
						<div class="font-black text-slate-700 text-9xl absolute top-5 left-10">2023</div>
					{/if} -->
					<div class="flex flex-col">
						<div class="w-1 bg-indigo-600 mr-12 line h-1/2" />
						<div class="rounded-full w-5 h-5 bg-indigo-500 mr-10 -ml-2" />
						<div class="w-1 bg-indigo-600 mr-12 line h-1/2" />
					</div>
					<!-- {element} -->
					<IntersectionObserver
						threshold={0.2}
						element={elementOnceList[i]}
						on:observe={(e) => {
							// console.log(e.detail); // IntersectionObserverEntry
							// console.log(e.detail.isIntersecting); // true | false
							displayList[i] = e.detail.isIntersecting;
						}}
					>
						<!-- <div bind:this={elementOnce} transition:fade>Hello world</div> -->
						<div
							bind:this={elementOnceList[i]}
							class:opacity-100={displayList[i]}
							class:blur-none={displayList[i]}
							class:translate-x-10={!displayList[i]}
							class="flex-col max-w-5/12 mr-10 mt-10 opacity-0 transition-all duration-700 blur"
						>
							<div class="font-bold md:text-2xl text-xl">{element.header}</div>
							<div class="font-bold text-slate-400">{element.timePeriod}</div>
							{#if element.points.length > 0}
								<div class="font-bold mt-3">{element.pointsHeader}</div>
								<ul class="list-disc list-inside">
									{#each element.points as point}
										<li>{point}</li>
									{/each}
								</ul>
							{/if}
							<!-- <p class="text-left mb-10 max-h-10">{element.text}</p> -->
						</div>
					</IntersectionObserver>
				</div>
			</div>
		{:else}
			<div class="flex flex-col justify-start items-start">
				<div class="flex flex-row w-1/2 items-stretch ml-14 justify-end">
					<IntersectionObserver
						element={elementOnceList[i]}
						on:observe={(e) => {
							console.log(e.detail); // IntersectionObserverEntry
							console.log(e.detail.isIntersecting); // true | false
							displayList[i] = e.detail.isIntersecting;
						}}
					>
						<div
							bind:this={elementOnceList[i]}
							class:opacity-100={displayList[i]}
							class:blur-none={displayList[i]}
							class:-translate-x-10={!displayList[i]}
							class="flex flex-col max-w-5/12 mr-10 mt-10 opacity-0 transition-all duration-1000 blur -translate-x-10"
						>
							<div class="font-bold md:text-2xl text-xl">{element.header}</div>
							<div class="font-bold text-slate-400">{element.timePeriod}</div>

							{#if element.points.length > 0}
								<div class="font-bold mt-3">{element.pointsHeader}</div>
								<ul class="list-disc list-inside">
									{#each element.points as point}
										<li>{point}</li>
									{/each}
								</ul>
							{/if}
						</div>
					</IntersectionObserver>
					<div class="flex flex-col mr-1">
						<div class="w-1 bg-indigo-600 mr-12 line h-1/2" />
						<div class="rounded-full w-5 h-5 bg-indigo-500 mr-10 -ml-2" />
						<div class="w-1 bg-indigo-600 mr-12 line h-1/2" />
					</div>
				</div>
			</div>
		{/if}
	{/each}
</div>

<div class="relative ml-10 sm:hidden">
	{#each timeline as element, i}
		<div class="flex flex-col justify-start items-start">
			<div class="flex flex-row items-stretch">
				<div class="flex flex-col ml-30">
					<div class="w-1 bg-indigo-600 mr-12 line h-1/2" />
					<div class="rounded-full w-5 h-5 bg-indigo-500 mr-10 -ml-2" />
					<div class="w-1 bg-indigo-600 mr-12 line h-1/2" />
				</div>
				<IntersectionObserver
					element={smallElementOnceList[i]}
					on:observe={(e) => {
						console.log(e.detail); // IntersectionObserverEntry
						console.log(e.detail.isIntersecting); // true | false
						smallDisplayList[i] = e.detail.isIntersecting;
					}}
				>
					<div
						class="flex flex-col w-10/12 mr-10 mt-10 opacity-0 transition-all duration-1000 -translate-x-10"
						bind:this={smallElementOnceList[i]}
						class:opacity-100={smallDisplayList[i]}
						class:blur-none={smallDisplayList[i]}
						class:-translate-x-10={!smallDisplayList[i]}
					>
						<div class="font-bold md:text-2xl text-xl">{element.header}</div>
						<div class="font-bold text-slate-400">{element.timePeriod}</div>
						{#if element.points.length > 0}
							<div class="font-bold mt-3">{element.pointsHeader}</div>
							<ul class="list-disc list-inside">
								{#each element.points as point}
									<li>{point}</li>
								{/each}
							</ul>
						{/if}
						<!-- <p class="text-left mb-10 max-h-10">{element.text}</p> -->
					</div>
				</IntersectionObserver>
			</div>
		</div>
	{/each}
</div>
