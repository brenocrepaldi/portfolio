import { useEffect, useState } from 'react';
import { Navbar } from './navbar/Navbar';
import { LanguageRadio } from './language-radio/LanguageRadio';

import './Header.css';

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
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

	const handleScroll = () => {
		const currentScrollY = window.scrollY;
		const windowHeight = window.innerHeight;

		if (currentScrollY > lastScrollY) {
			setIsVisible(false);
		} else {
			setIsVisible(true);
		}

		if (currentScrollY >= windowHeight) {
			setIsScrolledToBottom(true);
		} else {
			setIsScrolledToBottom(false);
		}

		setLastScrollY(currentScrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	return (
		<header
			className={`header ${isVisible ? 'visible' : 'hidden'} ${
				isScrolledToBottom ? 'scrolled-to-bottom' : ''
			}`}
		>
			<Navbar navbar={navbarItems} />
			<LanguageRadio language={language} onLanguageChange={onLanguageChange} />
		</header>
	);
}
