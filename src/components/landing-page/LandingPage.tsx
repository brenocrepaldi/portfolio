import { LandingPageProps } from "../../types";

import "./LandingPage.css";

export function LandingPage({
	title,
	name,
	subtitle,
	resume,
	contact,
}: LandingPageProps) {
	return (
		<section id="home" className="landing-page-container">
			<div className="landing-page-content">
				<div className="landing-page-header">
					<h2 className="subtitle">{title}</h2>
					<h1>{name}</h1>
					<h2 className="subtitle">{subtitle}</h2>
				</div>
				<div className="landing-page-links">
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
