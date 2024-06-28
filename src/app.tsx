import { useEffect, useState } from "react";
import { ContentProps } from "./types"; // Importando os tipos

import { Header } from "./components/header/Header";
import { LandingPage } from "./components/landing-page/LandingPage";
import { About } from "./components/about/About";
import { Experience } from "./components/experience/Experience";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";

import "./assets/css/global.css";
import "./assets/css/variables.css";
import "./app.css";

export function App() {
	const [content, setContent] = useState<ContentProps | null>(null);
	const [language, setLanguage] = useState("en"); // ou 'pt' para português

	useEffect(() => {
		const loadContent = async () => {
			try {
				const contentFile =
					language === "pt" ? "/content-pt.json" : "/content-en.json";
				const response = await fetch(contentFile);
				const data: ContentProps = await response.json();
				setContent(data);
			} catch (error) {
				console.error("Error loading content:", error);
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
					<Projects
						title={content.projects.title}
						list={content.projects.list}
					/>
					<Contact
						title={content.contacts.title}
						email={content.contacts.email}
						linkedin={content.contacts.linkedin}
						github={content.contacts.github}
					/>
				</main>
			</div>
		);
	}
}
