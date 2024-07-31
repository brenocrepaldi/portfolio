import { ContactsProps } from '../../types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	faLinkedin,
	faGithub,
	IconDefinition,
} from '@fortawesome/free-brands-svg-icons';

import './contact.css';

interface IconMap {
	[key: string]: IconDefinition;
}

const icons: IconMap = {
	email: faEnvelope,
	phone: faPhone,
	linkedin: faLinkedin,
	github: faGithub,
};

export function Contact({
	title,
	email,
	phone,
	linkedin,
	github,
}: ContactsProps) {
	return (
		<section className="contact-container" id="contact">
			<h2>{title}</h2>
			<div className="contact-list">
				<div className="contact-item">
					<a
						href={`mailto:${email.content}`}
						target="_blank"
						className="contact-icon-container"
					>
						<FontAwesomeIcon
							icon={icons['email']}
							className="contact-item-icon"
						/>
					</a>
					<strong>{email.title}</strong>
				</div>

				<div className="contact-item">
					<a
						href={`https://web.whatsapp.com/send?phone=${phone.content}`}
						target="_blank"
						className="contact-icon-container"
					>
						<FontAwesomeIcon
							icon={icons['phone']}
							className="contact-item-icon"
						/>
					</a>
					<strong>{phone.title}</strong>
				</div>

				<div className="contact-item">
					<a
						href={linkedin.content}
						target="_blank"
						rel="noopener noreferrer"
						className="contact-icon-container"
					>
						<FontAwesomeIcon
							icon={icons['linkedin']}
							className="contact-item-icon"
						/>
					</a>
					<strong>{linkedin.title}</strong>
				</div>

				<div className="contact-item">
					<a
						href={github.content}
						target="_blank"
						rel="noopener noreferrer"
						className="contact-icon-container"
					>
						<FontAwesomeIcon
							icon={icons['github']}
							className="contact-item-icon"
						/>
					</a>
					<strong>{github.title}</strong>
				</div>
			</div>
		</section>
	);
}
