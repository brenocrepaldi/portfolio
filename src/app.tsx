import { useEffect, useState } from "react";
import { Navbar } from "./components/navbar/Navbar";
import { Content } from "./types"; // Importando os tipos
import { LanguageDropdown } from "./components/language-dropdown/LanguageDropdown";

import "./app.css";

export function App() {
	const [content, setContent] = useState<Content | null>(null);
	const [language, setLanguage] = useState("en"); // ou 'pt' para português

	useEffect(() => {
		const loadContent = async () => {
			try {
				const contentFile =
					language === "pt" ? "/content-pt.json" : "/content-en.json";
				const response = await fetch(contentFile);
				const data: Content = await response.json();
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

	return (
		<div className="App">
			{content && (
				<header style={{ display: "flex" }}>
					<Navbar items={content.navbar} />
					<LanguageDropdown
						language={language}
						onLanguageChange={handleLanguageChange}
					/>
				</header>
			)}
			<main>
				{content && (
					<div>
						<h2>{content.about.title}</h2>
						<p>{content.about.description}</p>
					</div>
				)}
			</main>
		</div>
	);
}
