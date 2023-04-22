<script lang="ts">
	import { fade } from 'svelte/transition';

	export let showModal: boolean;
</script>

{#if showModal}
	<button
		on:click={() => (showModal = false)}
		class="tint fixed top-0 bottom-0 flex w-full h-full z-20 justify-center items-center"
		transition:fade
	>
		<button on:click={() => (showModal = false)} class="absolute top-10 right-10">&#10005</button>
		<slot />
	</button>
{/if}

<style>
	.tint {
		background-color: rgba(0, 0, 0, 0.7);
	}
</style>
