import { useEffect, useState } from 'react';
import { Navbar } from './navbar';
import { LanguageRadio } from './language-radio';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './css/index.css';

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
	const [islogoVisible, setIsLogoVisible] = useState(false);

	const handleScroll = () => {
		const currentScrollY = window.scrollY;
		const windowHeight = window.innerHeight;

		setIsLogoVisible(currentScrollY > windowHeight);

		setIsMenuVisible(currentScrollY >= windowHeight / 4);
		setIsScrolled(currentScrollY >= windowHeight / 2);

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
					isScrolled ? 'scrolled' : ''
				}`}
			>
				<Navbar navbar={navbarItems} islogoVisible={islogoVisible} />
			</header>
			<LanguageRadio language={language} onLanguageChange={onLanguageChange} />
		</div>
	);
}
