import { Navbar } from "./navbar/Navbar";
import { LanguageRadio } from "./language-radio/LanguageRadio";

import "./Header.css";

interface HeaderProps {
	navbarItems: Array<{ title: string; href: string }>;
	language: string;
	onLanguageChange: (lang: string) => void;
}

export function Header({
	navbarItems,
	language,
	onLanguageChange,
}: HeaderProps) {
	return (
		<header>
			<Navbar navbar={navbarItems} />
			<LanguageRadio language={language} onLanguageChange={onLanguageChange} />
		</header>
	);
}
