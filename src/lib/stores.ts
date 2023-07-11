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
		photoURLs: [['../../projects/Portfolio.png', 'Starting screen']]
	},
	Foodie: {
		title: 'Foodie',
		date: '2023',
		previewDescription:
			'A kivy app which helps you decide what to eat judging by the locations near you',
		description:
			'My Secondary 4 computing+ coursework, a kivy app which helps you decide what to eat judging by the locations near you',
		githubLink: 'https://github.com/AloneTotally/JSAcompcoursework2023',
		technologies: ['Kivy', 'KivyMD', 'Python3', 'Firebase'],
		photoURLs: [
			['../../projects/Foodie.png', 'Homepage'],
			['../../projects/Foodie1.png', 'View Location page'],
			['../../projects/Foodie2.png', 'Reviews page'],
			['../../projects/Foodie3.png', 'History page']
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
			['../../projects/Big-D-Project.png', 'Project'],
			['../../projects/Big-D-Project1.png', 'Labelled Project'],
			['../../projects/Big-D-Project2.png', 'Project flowchart'],
			['../../projects/Big-D-Project3.png', 'Project on Tinkercad']
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
		technologies: ['Sveltekit', 'Tailwind', 'HTML', 'CSS', 'Typescript', 'Firebase'],
		photoURLs: [
			['../../projects/Rebot.png', 'Section of Admin Homepage (All placeholders)'],
			['../../projects/Rebot1.png', 'Full Admin Homepage (All placeholders)']
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
		technologies: ['HTML', 'CSS', 'Javascript', 'Firebase'],
		photoURLs: [
			['../../projects/reMake.png', 'Feed'],
			['../../projects/reMake1.png', 'Posting question page']
		]
	},
	'suSSTaina-Ng': {
		title: 'suSSTaina-Ng',
		date: '2022',
		previewDescription:
			'A proof-of-concept school project used to help reduce Eutrophication in the school pond by growing plants in the pond.',
		description:
			'A proof-of-concept school project, which uses the help of plants to reduce eutrophication in the school pond. Although we had some success in growing the plants, it eventually died after a while due to parasites and algae.',
		githubLink:
			'https://www.instagram.com/p/Co7LQy1yMN5/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==', // TODO
		technologies: ['School', 'Plants', 'Sustainability'],
		photoURLs: [
			['../../projects/susstainang2.jpg', 'Second prototype'],
			['../../projects/susstainang.jpg', 'First prototype'],
			['../../projects/susstainang1.jpg', 'Plants of first prototype'],
			['../../projects/susstainang3.jpg', 'Loss of leaves in second prototype'],
			['../../projects/susstainang4.jpg', 'Underside of leaf after loss of leaves']
		]
	}
};
export const compCerts = {
	'aio-2022': {
		name: 'Australian Informatics Olympiad 2022',
		photoURL: '../../cert-pics/aio-2022.JPG',
		caption: 'Bronze',
		link: 'https://aio.edu.au/'
	},
	'bebras-2022': {
		name: 'Bebras Computational Thinking Challenge 2022',
		photoURL: '../../cert-pics/bebras-2022.png',
		caption: 'Honorable mention',
		link: 'https://www.bebraschallenge.org/'
	},
	'cat-2022': {
		name: 'Computational And Algorithmic Thinking 2022',
		photoURL: '../../cert-pics/cat-2022.JPG',
		caption: 'Participation',
		link: 'https://www.amt.edu.au/cat'
	},
	'drct-2021': {
		name: 'Design Thinking with Robotics and Computational Thinking 2021',
		photoURL: '../../cert-pics/drct-2021.JPG',
		caption: 'Gold',
		link: 'https://www.internationalolympiadacademy.com/olympiads/drct-design-thinking-with-robotics-and-computational-thinking'
	},
	'drct-global-finals-2021': {
		name: 'Design Thinking with Robotics and Computational Thinking Global Finals 2021',
		photoURL: '../../cert-pics/drct-global-finals-2021.jpg',
		caption: 'Silver',
		link: 'https://smo-testing.com/drctfinals/'
	},
	'immc-2023': {
		name: 'International Mathematical Modeling Challenge 2023 (IM²C 2023)',
		photoURL: '../../cert-pics/immc-2023.jpg',
		caption: 'Certificate of Commendation',
		link: 'https://www.immchallenge.org/'
	},
	'perse-2022': {
		name: 'Perse Coding Team Challenge 2022',
		photoURL: '../../cert-pics/perse-2022.png',
		caption: 'Merit',
		link: 'https://pctc.perse.co.uk/'
	},
	'perse-2023': {
		name: 'Perse Coding Team Challenge 2023',
		photoURL: '../../cert-pics/perse-2023.png',
		caption: 'Distinction',
		link: 'https://pctc.perse.co.uk/'
	},
	'perse-2023-round-2': {
		name: 'Perse Coding Team Challenge 2023 Final Round',
		photoURL: '../../cert-pics/perse-2023-r2.png',
		caption: 'Distinction',
		link: 'https://pctc.perse.co.uk/'
	}
};
