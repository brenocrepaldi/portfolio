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

export interface SkillsProps {
	title: string;
	list: [];
}

export interface JobProps {
	company: string;
	position: string;
	duration: string;
	description: string;
}

export interface ExperienceProps {
	title: string;
	jobs: Job[];
}

export interface ProjectItemProps {
	name: string;
	description: string;
	url: string;
}

export interface ProjectsProps {
	title: string;
	list: projects[];
}

export interface ContactsProps {
	title: string;
	email: string;
	linkedin: string;
	github: string;
}

export interface ContentProps {
	navbar: string[];
	landing: LandingPageProps;
	about: AboutProps;
	skills: SkillsProps;
	experience: ExperienceProps;
	projects: ProjectsProps;
	contacts: ContactsProps;
}
