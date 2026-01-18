interface NavItemsProps {
	title: string;
	href: string;
}

interface NavbarProps {
	navbar: NavItemsProps[];
	islogoVisible: boolean;
}

interface HomePageResumeProps {
	resumeTitle: string;
	download: string;
}

interface HomePageContactProps {
	contactTitle: string;
	href: string;
}

export interface HomePageProps {
	title: string;
	name: string;
	subtitle: string;
	resume: HomePageResumeProps;
	contact: HomePageContactProps;
	language: string;
	iconTitle: string;
	contactIconList: ContactItemProps[];
}

export interface AboutProps {
	title: string;
	description: string;
}

export interface SkillListProps {
	name: string;
	icon: string;
}

export interface SkillCategory {
	name: string;
	skills: SkillListProps[];
}

export interface SkillSet {
	skillList: SkillListProps[];
}

export interface SkillsProps {
	title: string;
	categories: SkillCategory[];
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
	isMobile?: boolean;
}

export interface ProjectsProps {
	title: string;
	projectList: ProjectItemProps[];
}

export interface ContactItemProps {
	title: string;
	content: string;
	icon: string;
}

export interface ContactsProps {
	title: string;
	contactList: ContactItemProps[];
}

export interface FooterProps {
	text: string;
}

export interface ContentProps {
	srcLogo: string;
	navbar: NavItemsProps[];
	home: HomePageProps;
	about: AboutProps;
	skills: SkillsProps;
	experience: ExperienceProps;
	projects: ProjectsProps;
	contacts: ContactsProps;
	footer: FooterProps;
}
