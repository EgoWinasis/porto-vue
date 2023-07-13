// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'School Library App',
		category: 'Web Application',
		img: require('@/assets/images/web-project-2.jpg'),
	},
	{
		id: 2,
		title: 'Students Registration App',
		category: 'Web Application',
		img: require('@/assets/images/mobile-project-2.jpg'),
	},
	{
		id: 3,
		title: 'Comic Reader App',
		category: 'Web Application',
		img: require('@/assets/images/ui-project-1.jpg'),
	},
	{
		id: 4,
		title: 'React Notes App',
		category: 'Web Application',
		img: require('@/assets/images/ui-project-2.jpg'),
	},
	{
		id: 5,
		title: 'Info Football App',
		category: 'Web Application',
		img: require('@/assets/images/mobile-project-1.jpg'),
	},
	{
		id: 6,
		title: 'Web Presence with RFID',
		category: 'Web Application',
		img: require('@/assets/images/web-project-1.jpg'),
	},
];

export default projects;
