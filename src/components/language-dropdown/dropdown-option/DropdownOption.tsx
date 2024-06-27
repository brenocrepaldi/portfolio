import "./DropdownOption.css";

interface DropdownOptionProps {
	lang: string;
	onClick: (lang: string) => void;
	selected: boolean;
}

export function DropdownOption({
	lang,
	onClick,
	selected,
}: DropdownOptionProps) {
	const handleClick = () => {
		onClick(lang);
	};

	return (
		<div
			className={`dropdown-option ${selected ? "selected" : ""}`}
			onClick={handleClick}
		>
			{lang === "en" ? "English" : "Português"}
		</div>
	);
}
