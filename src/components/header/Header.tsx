import { useEffect, useState } from 'react';
import { Navbar } from './navbar/Navbar';
import { LanguageRadio } from './language-radio/LanguageRadio';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isMenuVisible, setIsMenuVisible] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const handleScroll = () => {
		const currentScrollY = window.scrollY;
		const windowHeight = window.innerHeight;

		currentScrollY >= windowHeight / 4
			? setIsMenuVisible(true)
			: setIsMenuVisible(false);

		currentScrollY >= windowHeight / 2
			? setIsScrolled(true)
			: setIsScrolled(false);

		setLastScrollY(currentScrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [lastScrollY]);

	const handleMenuClick = () => {
		setIsMenuVisible(false);
	};

	return (
		<div>
			{isMenuVisible && (
				<div className="menu" onClick={handleMenuClick}>
					<FontAwesomeIcon icon={faBars} />
				</div>
			)}
			<header
				className={`header ${isMenuVisible ? 'navbar-hidden' : 'visible'} ${
					isScrolled ? 'scrolled' : null
				}`}
			>
				<Navbar navbar={navbarItems} />
			</header>
			<LanguageRadio language={language} onLanguageChange={onLanguageChange} />
		</div>
	);
}
