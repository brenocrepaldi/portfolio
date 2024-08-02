import resumePdfEn from '../../assets/resume/Resume-BrenoCrepaldi.pdf';
import resumePdfPt from '../../assets/resume/Currículo-BrenoCrepaldi.pdf';

import './css/index.css';

import { HomePageProps } from '../../types';

export function HomePage({
	title,
	name,
	subtitle,
	resume,
	contact,
	language,
}: HomePageProps) {
	let hrefResume;

	language === 'pt' ? (hrefResume = resumePdfPt) : (hrefResume = resumePdfEn);

	return (
		<section id="home" className="home-page-container">
			<div className="home-page-content">
				<div className="home-page-header">
					<h2 className="subtitle">{title}</h2>
					<h1>{name}</h1>
					<h2 className="subtitle">{subtitle}</h2>
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
