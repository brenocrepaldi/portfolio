import resumePdfEn from '../../assets/resume/Resume-BrenoCrepaldi.pdf';
import resumePdfPt from '../../assets/resume/Currículo-BrenoCrepaldi.pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
	faLinkedin,
	faGithub,
	IconDefinition,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

import './css/index.css';

import { HomePageProps } from '../../types';
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

export function HomePage({
	title,
	name,
	subtitle,
	resume,
	contact,
	language,
	iconTitle,
	contactIconList,
}: HomePageProps) {
	let hrefResume;

	language === 'pt' ? (hrefResume = resumePdfPt) : (hrefResume = resumePdfEn);

	return (
		<section id="home" className="home-page-container">
			<div className="home-page-content">
				<div className="home-page-header">
					<h2>{title}</h2>
					<h1>{name}</h1>
					<span>{subtitle}</span>
				</div>
				<div className="home-icons-container">
					<div className="home-icon-list">
						{contactIconList.map((contactItem, index) => (
							<a
								key={`${iconTitle}-${index}`}
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
				</div>
				<div className="home-page-links">
					<a href={contact.href} className="contact-animated-button">
						<span>{contact.contactTitle}</span>
						<span></span>
					</a>
					<a
						href={hrefResume}
						download={resume.download}
						className="resume-animated-button"
					>
						<span>{resume.resumeTitle}</span>
						<span></span>
					</a>
				</div>
			</div>
		</section>
	);
}
