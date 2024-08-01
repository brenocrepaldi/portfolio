import { HomePageProps } from '../../types';

import './css/index.css';

export function HomePage({
	title,
	name,
	subtitle,
	resume,
	contact,
}: HomePageProps) {
	return (
		<section id="home" className="home-page-container">
			<div className="home-page-content">
				<div className="home-page-header">
					<h2 className="subtitle">{title}</h2>
					<h1>{name}</h1>
					<h2 className="subtitle">{subtitle}</h2>
				</div>
				<div className="home-page-links">
					<a href="#contact" className="contact-animated-button">
						<span>{contact.contactTitle}</span>
						<span></span>
					</a>
					<button className="resume-animated-button">
						<span>{resume.resumeTitle}</span>
						<span></span>
					</button>
				</div>
			</div>
		</section>
	);
}
