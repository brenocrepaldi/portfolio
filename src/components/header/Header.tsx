import { Navbar } from "./navbar/Navbar";
import { LanguageRadio } from "./language-radio/LanguageRadio";

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
		<header style={{ padding: "40px" }}>
			<Navbar navbar={navbarItems} />
			<LanguageRadio language={language} onLanguageChange={onLanguageChange} />
		</header>
	);
}
