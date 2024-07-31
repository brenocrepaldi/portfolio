import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	faLinkedin,
	faGithub,
	IconDefinition,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

import { ContactsProps } from '../../types';

import './contact-icons.css';

interface IconMap {
	[key: string]: IconDefinition;
}

const icons: IconMap = {
	email: faEnvelope,
	phone: faPhone,
	linkedin: faLinkedin,
	github: faGithub,
	whatsapp: faWhatsapp,
};

export function ContactIcons({ title, contactList }: ContactsProps) {
	const [hide, setHide] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.innerHeight + window.scrollY;
			const documentHeight = document.documentElement.offsetHeight;
			setHide(scrollTop > documentHeight - 300);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={`contact-icons-container ${hide ? 'hide' : ''}`}>
			<div className="contact-icon-list">
				{contactList.map((contactItem, index) => (
					<a
						key={`${title}-${index}`}
						href={contactItem.content}
						title={contactItem.title}
						target="_blank"
					>
						<FontAwesomeIcon
							icon={icons[contactItem.icon]}
							className="contact-icon"
						/>
					</a>
				))}
			</div>
			<div className="contact-line"></div>
		</div>
	);
}
