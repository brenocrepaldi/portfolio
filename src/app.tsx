import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Header } from './components/header/Header';
import { LandingPage } from './components/landing-page/LandingPage';
import { About } from './components/about/About';
import { Experience } from './components/experience/Experience';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { ContactIcons } from './components/contact-icons/contact-icons';

import { ContentProps } from './types';
import { Contact } from './components/contact/contact';

export function App() {
	const [content, setContent] = useState<ContentProps | null>(null);
	const [language, setLanguage] = useState('en');

	useEffect(() => {
		const loadContent = async () => {
			try {
				const contentFile =
					language === 'pt' ? '/content-pt.json' : '/content-en.json';
				const response = await fetch(contentFile);
				const data: ContentProps = await response.json();
				setContent(data);
			} catch (error) {
				console.error('Error loading content:', error);
			}
		};
		loadContent();
	}, [language]);

	const handleLanguageChange = (lang: string) => {
		setLanguage(lang);
	};

	if (content) {
		return (
			<div className="App">
				<Header
					navbarItems={content.navbar}
					language={language}
					onLanguageChange={handleLanguageChange}
				/>
				<TransitionGroup>
					<CSSTransition key={language} timeout={500} classNames="fade">
						<main>
							<LandingPage
								title={content.landing.title}
								name={content.landing.name}
								subtitle={content.landing.subtitle}
								resume={content.landing.resume}
								contact={content.landing.contact}
							/>
							<About
								title={content.about.title}
								description={content.about.description}
							/>
							<Experience
								title={content.experience.title}
								jobs={content.experience.jobs}
							/>
							<Skills
								title={content.skills.title}
								skillSet={content.skills.skillSet}
							/>
							<Projects
								title={content.projects.title}
								projectList={content.projects.projectList}
							/>
							<ContactIcons
								email={content.contacts.email}
								linkedin={content.contacts.linkedin}
								github={content.contacts.github}
							/>
							<Contact
								title={content.contacts.title}
								email={content.contacts.email}
								linkedin={content.contacts.linkedin}
								github={content.contacts.github}
							/>
						</main>
					</CSSTransition>
				</TransitionGroup>
			</div>
		);
	}
}
