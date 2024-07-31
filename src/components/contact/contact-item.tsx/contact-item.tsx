import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	faLinkedin,
	faGithub,
	IconDefinition,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

import { ContactItemProps } from '../../../types';

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

export function ContactItem({ title, content, icon }: ContactItemProps) {
	return (
		<div className="contact-item">
			<a href={content} target="_blank" className="contact-icon-container">
				<FontAwesomeIcon icon={icons[icon]} className="contact-item-icon" />
			</a>
			<strong>{title}</strong>
		</div>
	);
}
