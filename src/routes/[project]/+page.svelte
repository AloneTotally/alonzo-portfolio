<script>
	import { cardData } from '$lib/stores';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	// import { goto } from '$app/navigation';
	const name = $page.params.project;

	// console.log(name);
	const numProjects = Object.keys(cardData).length;
	// @ts-ignore
	const projectInfo = cardData[name];
	const index = numProjects - Object.keys(cardData).indexOf(projectInfo.title);
	const filepath = `../../../src/lib/assets/projects/${name}.jpg`.toString();
	// console.log(filepath);

	var startGridAnimation = false;
	onMount(() => {
		startGridAnimation = true;
		console.log(projectInfo);
	});
</script>

<svelte:head>
	<title>Alonzo's project - {name}</title>
	<meta property="og:title" content="Alonzo's project - {name}" />
	<meta property="og:type" content="website" />
	<meta property="og:description" content={projectInfo.previewDescription} />
</svelte:head>

<body class="bg-slate-900">
	{#if !startGridAnimation}
		<div
			class="loading-wrapper z-20 bg-slate-900 flex justify-center items-center"
			id="loading-wrapper"
		>
			<div class="loading z-20 w-10 h-10 bg-slate-900" id="loading" transition:fade />
		</div>
	{/if}

	<div class="w-full flex md:flex-row flex-col-reverse gap-10 text-white">
		<div class="border-r w-full md:w-8/12 border-indigo-500">
			{#each projectInfo.photoURLs as photo}
				<figure class="mt-10 mx-5 md:mx-0">
					<figcaption class="font-bold mt-10 mb-2">{photo[1]}</figcaption>
					<img class="w-full h-auto" src={photo[0]} alt="" />
				</figure>
			{/each}
		</div>

		<div class="md:right-0 md:fixed static md:w-4/12 w-full px-10 md:mb-10">
			<div class="flex flex-row justify-between mt-5 -ml-5 mr-5">
				{#if index > 1}
					<a
						rel="external"
						href={Object.keys(cardData)[numProjects - index + 1]}
						class="flex flex-col justify-center items-center popupwrapper"
					>
						<p>&leftarrow;</p>
						<p class="text-xs popup transition-all duration-300">Previous project</p>
					</a>
				{/if}
				<a class="flex flex-col justify-center items-center popupwrapper" href="/">
					<svg
						width="30"
						height="30"
						viewBox="0 0 30 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M11.4185 25.9667V22.1445C11.4185 21.1688 12.2152 20.3779 13.198 20.3779H16.7908C17.2627 20.3779 17.7154 20.564 18.0491 20.8953C18.3828 21.2266 18.5703 21.676 18.5703 22.1445V25.9667C18.5674 26.3723 18.7276 26.7623 19.0155 27.0502C19.3033 27.3381 19.6951 27.5 20.1037 27.5H22.5548C23.6995 27.5029 24.7984 27.0536 25.609 26.251C26.4195 25.4485 26.875 24.3587 26.875 23.2223V12.3336C26.875 11.4156 26.4651 10.5448 25.7558 9.95584L17.4175 3.34484C15.9671 2.1857 13.8889 2.22313 12.4817 3.43372L4.33377 9.95584C3.59093 10.5274 3.14694 11.4008 3.125 12.3336V23.2112C3.125 25.5798 5.05923 27.5 7.44522 27.5H9.84036C10.689 27.5 11.3787 26.8203 11.3849 25.9778L11.4185 25.9667Z"
							fill="#F9FAFB"
						/>
					</svg>
					<p class="text-xs popup transition-all duration-300">Back to home</p>
				</a>
				{#if index < Object.keys(cardData).length}
					<a
						rel="external"
						href={Object.keys(cardData)[numProjects - index - 1]}
						class="flex flex-col justify-center items-center popupwrapper"
					>
						<p>&rightarrow;</p>
						<p class="text-xs popup transition-all duration-300">Next project</p>
					</a>
				{/if}
			</div>
			<h1 class="font-bold text-2xl md:text-4xl mt-10">{projectInfo.title}</h1>
			<p class="mt-2 font-semibold text-sm text-gray-400">Done in {projectInfo.date}</p>
			<div class="mt-5 mr-5">{projectInfo.description}</div>
			<ul class="flex flex-row gap-2 flex-wrap mt-5">
				{#each projectInfo.technologies as tech}
					<li class="text-gray-400 font-light font-mono text-sm">{tech}</li>
				{/each}
			</ul>
			<div class="flex flex-row justify-between mt-5">
				<a
					class="bg-indigo-600 duration-300 hover:bg-indigo-500 px-3 py-1 rounded-md w-fit flex flex-row items-center gap-1"
					href={projectInfo.githubLink}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="36"
						width="36"
						viewBox="-6.39108 -10.38875 55.38936 62.3325"
					>
						<g fill="#fff">
							<path
								d="M21.3035 0C9.5395 0 0 9.5373 0 21.3035c0 9.4122 6.1041 17.3976 14.5687 20.2146 1.0646.1972 1.4555-.4622 1.4555-1.0249 0-.5076-.0198-2.1861-.0289-3.9662-5.9266 1.2887-7.1772-2.5136-7.1772-2.5136-.9691-2.462-2.3654-3.1171-2.3654-3.1171-1.9329-1.3222.1457-1.295.1457-1.295 2.1392.1502 3.2656 2.1956 3.2656 2.1956 1.9001 3.2565 4.9837 2.315 6.1994 1.7706.1916-1.3765.7433-2.3167 1.3526-2.8487-4.7319-.5383-9.706-2.3653-9.706-10.5283 0-2.3255.8322-4.2259 2.195-5.7178-.2212-.537-.9504-2.7037.2067-5.638 0 0 1.789-.5723 5.8596 2.184 1.6994-.472 3.5218-.7088 5.3323-.7172 1.8104.008 3.6343.2451 5.3368.7172 4.0661-2.7563 5.8526-2.184 5.8526-2.184 1.1596 2.9343.4304 5.101.2092 5.638 1.366 1.4919 2.1921 3.3923 2.1921 5.7178 0 8.1827-4.9837 9.984-9.7275 10.5114.7642.6611 1.445 1.9576 1.445 3.9451 0 2.8505-.0243 5.1446-.0243 5.8462 0 .5673.3831 1.2316 1.463 1.0224 8.4603-2.8201 14.5566-10.8028 14.5566-20.212C42.6071 9.5372 33.0691 0 21.3036 0"
								fill-rule="evenodd"
							/>
							<path
								d="M8.0689 30.587c-.047.1061-.2135.1379-.3651.0649-.155-.0695-.2413-.2138-.1913-.32.046-.1087.2124-.139.367-.0663.1545.0695.2426.2152.1894.3214m.863.9625c-.1016.0942-.3006.0504-.435-.0984-.1397-.1485-.1655-.3475-.0624-.4427.1048-.0942.2974-.0501.4367.0984.1397.1503.1669.3475.0607.4427m.8399 1.2268c-.1305.091-.3443.006-.4763-.1834-.1305-.1898-.1305-.417.003-.508.132-.091.3426-.009.4763.1788.1302.1926.1302.4198-.003.5126m1.1506 1.1855c-.1167.1287-.3654.0942-.5475-.0815-.1862-.1718-.238-.4156-.1213-.5444.1185-.129.3686-.0928.552.0815.185.1715.241.417.1168.5444m1.5876.6882c-.052.167-.291.2424-.5324.1715-.241-.073-.3986-.268-.35-.4367.0502-.1683.2908-.247.5338-.1711.2406.0727.3987.2667.3486.4364m1.7435.1275c.006.1757-.1986.3214-.4519.3245-.2547.006-.461-.1365-.4639-.3094 0-.1774.2004-.3213.4547-.326.2533-.005.4611.1366.4611.3109m1.6223-.276c.0303.171-.1457.3471-.3972.394-.2473.0455-.4763-.0607-.5077-.2303-.0307-.1757.1482-.3517.3955-.3972.2519-.0437.4773.0593.5094.2335"
							/>
						</g>
					</svg>

					<p class="pr-1">View on Github</p>
				</a>
				<div
					class="md:bottom-10 md:right-0 md:fixed text-slate-500 font-medium mr-10 flex justify-center items-center"
				>
					{'Project #' + (index.toString().length == 1 ? '0' + index.toString() : index)}
				</div>
			</div>
		</div>
	</div>
</body>

<style>
	:root {
		--rows: 0;
		--columns: 0;
	}
	.loading-wrapper {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		opacity: 100%;
	}
	.loading {
		/* position: fixed; */
		/* bottom: 50%;
		left: 50%;
		transform: translate(-50%, -50%); */
		/* 		background-color: #FFF; */
		border: 2px #fff solid;
		animation: loader 0.5s infinite ease-in-out;
	}
	@keyframes loader {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(90deg);
		}
	}
	.popup {
		opacity: 0;
	}
	.popupwrapper:hover .popup {
		opacity: 1;
	}
	/* .skeleton {
		animation: skeleton-loading 1s linear infinite alternate;
	}

	@keyframes skeleton-loading {
		0% {
			background-color: hsl(200, 20%, 30%);
		}

		100% {
			background-color: hsl(200, 20%, 50%);
		}
	} */
</style>
