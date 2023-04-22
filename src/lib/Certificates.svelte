<script lang="ts">
	import Modal from '$lib/Modal.svelte';

	const certificates = {
		'bebras-2022': {
			name: 'Bebras Computational Thinking Challenge 2022',
			photoURL: '../../../src/lib/assets/cert-pics/bebras-2022.png',
			caption: 'Honorable mention',
			link: 'https://www.bebraschallenge.org/'
		},
		'perse-2022': {
			name: 'Perse Coding Team Challenge 2022',
			photoURL: '../../../src/lib/assets/cert-pics/perse-2022.png',
			caption: 'Merit',
			link: 'https://pctc.perse.co.uk/'
		},
		'perse-2023': {
			name: 'Perse Coding Team Challenge 2023',
			photoURL: '../../../src/lib/assets/cert-pics/perse-2023.png',
			caption: 'Distinction',
			link: 'https://pctc.perse.co.uk/'
		},
		'drct-global-finals-2021': {
			name: 'Design Thinking with Robotics and Computational Thinking Global Finals 2021',
			photoURL: '../../../src/lib/assets/cert-pics/drct-global-finals-2021.jpg',
			caption: 'Silver',
			link: 'https://www.internationalolympiadacademy.com/olympiads/drct-design-thinking-with-robotics-and-computational-thinking'
		},
		'sololearn-go': {
			name: 'Sololearn - Go',
			photoURL: '../../../src/lib/assets/cert-pics/sololearn-go.png',
			caption: 'Sololearn Course',
			link: 'https://www.sololearn.com/profile/25425602'
		},
		// 'sololearn-machinelearning': {
		// 	name: 'Sololearn - Machine Learning',
		// 	photoURL: '../../../src/lib/assets/cert-pics/sololearn-machinelearning.png',
		// 	caption: 'Sololearn Course',
		// 	link: 'https://www.sololearn.com/profile/25425602'
		// },
		'sololearn-python': {
			name: 'Sololearn - Intermediate Python',
			photoURL: '../../../src/lib/assets/cert-pics/sololearn-python.png',
			caption: 'Sololearn Course',
			link: 'https://www.sololearn.com/profile/25425602'
		}
	};
	let modalPhoto = '';
	let showModal: boolean = false;
	const handleClick = (photoURL: string) => {
		showModal = true;
		modalPhoto = photoURL;
	};
</script>

<div class="text-white flex flex-col items-center text-lg scroll-mt-10" id="Certificates">
	<Modal bind:showModal>
		<img src={modalPhoto} alt="" class="h-5/6 w-auto" />
	</Modal>
	<h2 class="font-extrabold text-4xl mt-10">Certificates</h2>
	<span class="text-slate-400 mb-16">Certificates from competitions or courses</span>
	<div class="grid grid-cols-3 gap-3 w-10/12">
		{#each Object.values(certificates) as cert}
			<button
				class=" bg-gray-800 text-left flex flex-col pb-5 rounded-xl hover:shadow-2xl hover:shadow-black hover:scale-105 transition-all duration-300 cursor-pointer card"
			>
				<button on:click={() => handleClick(cert.photoURL)} class="relative photo">
					<img src={cert.photoURL} alt="" class="w-full h-auto rounded-t-xl" />
				</button>
				<!-- <p class="absolute top-1/2 right-1/2 z-20">View image</p> -->
				<h3 class="text-white text-xl font-semibold mx-3 mt-3 transition-colors duration-500 title">
					{cert.name}
				</h3>
				<p class="text-base font-medium ml-3 text-slate-400">{cert.caption}</p>
			</button>
		{/each}
	</div>
</div>

<style>
	.photo::before {
		content: 'View Image';
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 500;
		text-align: center;
		position: absolute;
		bottom: 0;
		right: 0;
		transform: translate(0, -100%);
		background-color: black;
		z-index: 9;
		width: 100%;
		height: 100%;
		transform: translate(0px, 0px);
		opacity: 0%;
		transition: all;
		transition-duration: 300ms;
	}
	.photo:hover::before {
		opacity: 80%;
	}
</style>
