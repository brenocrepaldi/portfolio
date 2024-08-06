import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { MouseFollowsEvent } from './components/mouse-event';

import { Header } from './components/header/header';
import { HomePage } from './components/home-page/home-page';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { ContactIcons } from './components/contact-icons/contact-icons';

import { ContentProps } from './types';

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
				<img src={content.srcLogo} alt="Logo" className="logo" />
				<MouseFollowsEvent />
				<Header
					navbarItems={content.navbar}
					language={language}
					onLanguageChange={handleLanguageChange}
				/>
				<TransitionGroup>
					<CSSTransition key={language} timeout={500} classNames="fade">
						<main>
							<HomePage
								title={content.home.title}
								name={content.home.name}
								subtitle={content.home.subtitle}
								resume={content.home.resume}
								contact={content.home.contact}
								language={language}
								iconTitle={content.contacts.title}
								contactIconList={content.contacts.contactList}
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
							<Contact
								title={content.contacts.title}
								contactList={content.contacts.contactList}
							/>
							<Footer text={content.footer.text} />
						</main>
					</CSSTransition>
				</TransitionGroup>
				<ContactIcons
					title={content.contacts.title}
					contactList={content.contacts.contactList}
				/>
			</div>
		);
	}
}
