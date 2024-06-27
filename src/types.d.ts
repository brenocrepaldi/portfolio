export interface Job {
	company: string;
	position: string;
	duration: string;
	description: string;
}

export interface Project {
	name: string;
	description: string;
	url: string;
}

export interface Contacts {
	title: string;
	email: string;
	linkedin: string;
	github: string;
}

export interface Content {
	navbar: string[];
	about: {
		title: string;
		description: string;
	};
	experience: {
		title: string;
		jobs: Job[];
	};
	projects: {
		title: string;
		list: Project[];
	};
	contacts: Contacts;
}
