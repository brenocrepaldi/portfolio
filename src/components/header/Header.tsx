import { Navbar } from "./navbar/Navbar";
import { LanguageDropdown } from "./language-dropdown/LanguageDropdown";

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
		<header style={{ display: "flex" }}>
			<Navbar items={navbarItems} />
			<LanguageDropdown
				language={language}
				onLanguageChange={onLanguageChange}
			/>
		</header>
	);
}
