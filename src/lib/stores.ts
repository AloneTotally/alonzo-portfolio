import { writable, type Writable } from 'svelte/store';
export const projectInfo: Writable<{
	title: string;
	description: string;
}> = writable({
	title: '',
	description: ''
});
