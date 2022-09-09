import emoji from "react-easy-emoji";

import googlelogo from "./assets/img/icons/common/google.svg";
import github from "./assets/img/icons/common/github.svg";
import airbnb from "./assets/img/icons/common/airbnbLogo.png";

export const greetings = {
	name: "Fatunde Damilare",
	title: "Hi all, I'm Damilare",
	description:
		"A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Vue / Laravel  and some other cool libraries and frameworks and Cross Platform Mobile Apps With React Native.",
	resumeLink: "https://res.cloudinary.com/dedukt/image/upload/v1662714358/id%20card/bl94swvwhnsj2imhclm0.pdf",

};

export const openSource = {
	githubUserName: "Fatunde",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/profile.php?id=100008330640707",
	github: "https://github.com/Fatunde",
	linkedin: "https://www.linkedin.com/in/fatunde-damilare-a8a912200",
	email: "mailto:fatundedamilare@gmailcom",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		)
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "80", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "80",
	},
	{
		Stack: "Programming",
		progressPercentage: "75",
	},
];

export const educationInfo = [
	{
		schoolName: "Setma Comprehensive College",
		subHeader: "West Africa Senior Secondary Certificate",
		duration: "September 2009 - April 2015",
		desc: "Holding a prefectship position as the school laboratory prefect.",
		descBullets: [
			"Joint collaboration with colleagues to build a simple web page",
		],
	},

	{
		schoolName: "Nigerian Army College of Education and Environmental Studies",
		subHeader: "Ordinary National Diploma in Computer Science",
		duration: "September 2017 - October 2019",
		desc: "Participated in various tech school organization, ...",
		descBullets: [
			"Developed a system that manages the course assignment to all lecturers in the institution",
		],
	},
];

export const experience = [
	{
		role: "Front End Developer",
		company: "Dedukt",
	//	companylogo: googlelogo,
		date: "August 2021 – Present",
		desc: "I worked as team Front End Developer in a great team, which i was able to impact my past experience for the growth and development of the organization",
		/*descBullets: [
			"I designed and wrote readable codes that tested and deploy for product usage",
			"Reviewed software documentation to maintain adherence to industry standards and prevent discrepancies",
			"Built applications using React, React Native and Node Js.",
			"Analyzed and interpreted complex technical documents and data models",
			"Developed and directed software system testing and validation procedures"
		],*/
	},
	{
		role: "Full Stack Developer",
		company: "Strive Human Resource",
	//	companylogo: googlelogo,
		date: "September 2021 – August 2022",
		desc: "I rendered styles in client side pages, and made use of my experience to make the features and functionalities works accordingly to the project flow"
	},
	{
		role: "Mobile Application Developer",
		company: "Goflux Services Limited",
	//	companylogo: googlelogo,
		date: "January 2021 – July 2021",
		desc: "I worked as a fullstack developer in developing few projects which includes web applications, mobile applications and rest api.",
	},
	{
		role: "Junior Software Developer",
		company: "Credpal",
	//	companylogo: github,
		date: "June 2020 – December 2020",
		desc: "I worked as a front end developer contributing to various project as a team player.",
	},
	{
		role: "Software Developer Intern",
		company: "Ensemble Lab Limited",
	//	companylogo: airbnb,
		date: "September 2019 – Jun 2020",
		desc: "I worked as an intern software developer, which i contributed to few projects and also worked on support",
	},
];

export const projects = [
	{
		name: "Dedukt Platform",
		desc: "Rendered pages, created complex functionalities on the client side",
		link: "https://dedukt.co",
	},
	{
		name: "Strive Human resouces job board",
		desc: "Built the server side, render designs pages, and created every functionalities in the client side",
		link: "https://jobboard.strivehumanresources.com/",
	},
	{
		name: "Goflux Services Limited official website",
		desc: "Created and design major components in the website",
		link: "https://goflux.de/",
	},
	{
		name: "Emergehub website",
		desc: "Design few components and also integrated a payment system in the web application",
		link: "http://www.emergehub.com.ng/",
	},
	{
		name: "Workova",
		desc: "Created and design major components in the website",
		link: "https://insider.workova.co/",
	},
	{
		name: "Group Chat Web Application",
		desc: "Created the user interface as well as the server",
		link: "https://blissful-hopper-ec5783.netlify.app/",
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
