export interface NavbarProps {
	title: string;
	href: string;
}

interface LandingPageResumeProps {
	resumeTitle: string;
	link: string;
}

interface LandingPageContactProps {
	contactTitle: string;
	link: string;
}

export interface LandingPageProps {
	title: string;
	name: string;
	subtitle: string;
	resume: LandingPageResumeProps;
	contact: LandingPageContactProps;
}

export interface AboutProps {
	title: string;
	description: string;
}

export interface SkillListProps {
	name: string;
	icon: string;
}

export interface SkillSet {
	skillList: SkillListProps[];
}

export interface SkillsProps {
	title: string;
	skillSet: SkillSet;
}

export interface JobProps {
	company: string;
	position: string;
	duration: string;
	description: string;
	technologies: string[];
}

export interface ExperienceProps {
	title: string;
	jobs: JobProps[];
}

export interface ProjectItemProps {
	image: string;
	name: string;
	description: string;
	url: string;
	technologies: string[];
}

export interface ProjectsProps {
	title: string;
	projectList: ProjectItemProps[];
}

export interface ContactsProps {
	title: string;
	email: {
		title: string;
		content: string;
	};
	phone: {
		title: string;
		content: string;
	};
	linkedin: {
		title: string;
		content: string;
	};
	github: {
		title: string;
		content: string;
	};
}

export interface ContentProps {
	navbar: NavbarProps[];
	landing: LandingPageProps;
	about: AboutProps;
	skills: SkillsProps;
	experience: ExperienceProps;
	projects: ProjectsProps;
	contacts: ContactsProps;
}
