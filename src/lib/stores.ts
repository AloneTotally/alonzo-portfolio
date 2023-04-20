import { writable, type Writable } from 'svelte/store';
export const projectInfo: Writable<{
	title: string;
	description: string;
}> = writable({
	title: '',
	description: ''
});

export const cardData = {
	'2023 Portfolio website': {
		title: '2023 Portfolio website',
		date: '2023',
		description: 'My current portfolio website (The one you are looking at right now)',
		link: 'https://github.com/AloneTotally/alonzo-portfolio',
		technologies: ['Sveltekit', 'Tailwind', 'HTML', 'CSS', 'Typescript'],
		photoURLs: [['../../../src/lib/assets/Portfolio.png', 'Starting screen']]
	},
	Foodie: {
		title: 'Foodie',
		date: '2023',
		description:
			'My Secondary 4 computing+ coursework, a kivy app which helps you decide what to eat judging by the locations near you',
		link: 'https://github.com/AloneTotally/JSAcompcoursework2023',
		technologies: ['Kivy', 'KivyMD', 'Python3'],
		photoURLs: [
			['../../../src/lib/assets/Foodie.png', 'Homepage'],
			['../../../src/lib/assets/Foodie1.png', 'View Location page'],
			['../../../src/lib/assets/Foodie2.png', 'Reviews page'],
			['../../../src/lib/assets/Foodie3.png', 'History page']
		]
	},
	Rebot: {
		title: 'Rebot',
		date: '2022',
		description:
			'My Secondary 3 SST Inc project, which is a website used to help the ease of communication between the ICT helpdesk and the students in a school (Incomplete, more details in the github repository)',
		link: 'https://github.com/snyperf1/WeShaalHelp',
		technologies: ['Sveltekit', 'Tailwind', 'HTML', 'CSS', 'Typescript'],
		photoURLs: [
			['../../../src/lib/assets/Rebot.png', 'Section of Admin Homepage (All placeholders)'],
			['../../../src/lib/assets/Rebot1.png', 'Full Admin Homepage (All placeholders)']
		]
	},
	reMake: {
		title: 'reMake',
		date: '2021',
		description:
			'My Secondary 2 CM project, which is a forum website which is focused on questions that are environmentally related.',
		link: 'https://github.com/AloneTotally/cmproject-reMake',
		technologies: ['HTML', 'CSS', 'Javascript'],
		photoURLs: [
			['../../../src/lib/assets/reMake.png', 'Feed'],
			['../../../src/lib/assets/reMake1.png', 'Posting question page']
		]
	}
};
