import { useState } from "react";
import { DropdownOption } from "./dropdown-option/DropdownOption";
import "./LanguageDropdown.css";

interface LanguageDropdownProps {
	language: string;
	onLanguageChange: (lang: string) => void;
}

export function LanguageDropdown({
	language,
	onLanguageChange,
}: LanguageDropdownProps) {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	const handleOptionClick = (lang: string) => {
		onLanguageChange(lang);
		setDropdownOpen(false);
	};

	return (
		<div className="change-lang-container">
			<div
				className={`change-lang-dropdown ${dropdownOpen ? "open" : ""}`}
				onClick={toggleDropdown}
			>
				{language === "en" ? "English" : "Português"}
			</div>
			{dropdownOpen && (
				<div className="dropdown-options">
					<DropdownOption
						lang="en"
						onClick={handleOptionClick}
						selected={language === "en"}
					/>
					<DropdownOption
						lang="pt"
						onClick={handleOptionClick}
						selected={language === "pt"}
					/>
				</div>
			)}
		</div>
	);
}
