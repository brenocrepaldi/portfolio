interface LanguageRadioProps {
	language: string;
	onLanguageChange: (lang: string) => void;
}

export function LanguageRadio({
	language,
	onLanguageChange,
}: LanguageRadioProps) {
	const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onLanguageChange(event.target.value);
	};

	return (
		<div className="radio-inputs">
			<label className="radio">
				<input
					type="radio"
					name="radio"
					value="en"
					checked={language === 'en'}
					onChange={handleOptionChange}
				/>
				<span className="name">English</span>
			</label>
			<label className="radio">
				<input
					type="radio"
					name="language"
					value="pt"
					checked={language === 'pt'}
					onChange={handleOptionChange}
				/>
				<span className="name">Português</span>
			</label>
		</div>
	);
}
