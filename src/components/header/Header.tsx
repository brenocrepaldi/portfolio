import { Navbar } from "./navbar/Navbar";
import { LanguageRadio } from "./language-radio/LanguageRadio";

interface HeaderProps {
	navbarItems: string[];
	language: string;
	onLanguageChange: (lang: string) => void;
}

export function Header({
	navbarItems,
	language,
	onLanguageChange,
}: HeaderProps) {
	return (
		<header style={{ padding: "40px" }}>
			<Navbar items={navbarItems} />
			<LanguageRadio
				language={language}
				onLanguageChange={onLanguageChange}
			/>
		</header>
	);
}
