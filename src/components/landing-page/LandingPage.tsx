import { LandingPageProps } from "../../types";

export function LandingPage({
	title,
	subtitle,
	resume,
	contact,
}: LandingPageProps) {
	return (
		<section>
			<div>
				<h1>{title}</h1>
				<p>{subtitle}</p>
			</div>
			<div>
				<a href={resume.link}>{resume.resumeTitle}</a>
				<a href={contact.link}>{contact.contactTitle}</a>
			</div>
		</section>
	);
}
