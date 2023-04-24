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
		previewDescription: 'My current portfolio website (The one you are looking at right now)',
		description: 'My current portfolio website (The one you are looking at right now)',
		githubLink: 'https://github.com/AloneTotally/alonzo-portfolio',
		technologies: ['Sveltekit', 'Tailwind', 'HTML', 'CSS', 'Typescript'],
		photoURLs: [['../../../src/lib/assets/projects/Portfolio.png', 'Starting screen']]
	},
	Foodie: {
		title: 'Foodie',
		date: '2023',
		previewDescription:
			'A kivy app which helps you decide what to eat judging by the locations near you',
		description:
			'My Secondary 4 computing+ coursework, a kivy app which helps you decide what to eat judging by the locations near you',
		githubLink: 'https://github.com/AloneTotally/JSAcompcoursework2023',
		technologies: ['Kivy', 'KivyMD', 'Python3'],
		photoURLs: [
			['../../../src/lib/assets/projects/Foodie.png', 'Homepage'],
			['../../../src/lib/assets/projects/Foodie1.png', 'View Location page'],
			['../../../src/lib/assets/projects/Foodie2.png', 'Reviews page'],
			['../../../src/lib/assets/projects/Foodie3.png', 'History page']
		]
	},
	'SUTD-NP-SST Big D Camp Project': {
		title: 'SUTD-NP-SST Big D Camp Project',
		date: '2023',
		previewDescription: 'A proof-of-concept of an elevator that would stop during earthquakes',
		description: 'A proof-of-concept of an elevator that would stop during earthquakes',
		githubLink: 'https://github.com/AloneTotally/grp3-big-D-2023',
		technologies: ['Hardware', 'Arduino', 'C++'],
		photoURLs: [
			['../../../src/lib/assets/projects/Big-D-Project.png', 'Project'],
			['../../../src/lib/assets/projects/Big-D-Project1.png', 'Labelled Project'],
			['../../../src/lib/assets/projects/Big-D-Project2.png', 'Project flowchart'],
			['../../../src/lib/assets/projects/Big-D-Project3.png', 'Project on Tinkercad']
		]
	},
	Rebot: {
		title: 'Rebot',
		date: '2022',
		previewDescription:
			'A website used to help the ease of communication between the ICT helpdesk and the students in a school',
		description:
			'My Secondary 3 SST Inc project, which is a website used to help the ease of communication between the ICT helpdesk and the students in a school (Incomplete, more details in the github repository)',
		githubLink: 'https://github.com/snyperf1/WeShaalHelp',
		technologies: ['Sveltekit', 'Tailwind', 'HTML', 'CSS', 'Typescript'],
		photoURLs: [
			[
				'../../../src/lib/assets/projects/Rebot.png',
				'Section of Admin Homepage (All placeholders)'
			],
			['../../../src/lib/assets/projects/Rebot1.png', 'Full Admin Homepage (All placeholders)']
		]
	},
	reMake: {
		title: 'reMake',
		date: '2021',
		previewDescription:
			'A forum website which is focused on questions that are environmentally related.',
		description:
			'My Secondary 2 CM project, which is a forum website which is focused on questions that are environmentally related.',
		githubLink: 'https://github.com/AloneTotally/cmproject-reMake',
		technologies: ['HTML', 'CSS', 'Javascript'],
		photoURLs: [
			['../../../src/lib/assets/projects/reMake.png', 'Feed'],
			['../../../src/lib/assets/projects/reMake1.png', 'Posting question page']
		]
	}
};
