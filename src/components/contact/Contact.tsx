import { ContactsProps } from "../../types";

export function Contact({ title, email, linkedin, github }: ContactsProps) {
	return (
		<section id="contact">
			<h2>{title}</h2>
			<p>
				<strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
			</p>
			<p>
				<strong>LinkedIn:</strong>{" "}
				<a href={linkedin} target="_blank" rel="noopener noreferrer">
					{linkedin}
				</a>
			</p>
			<p>
				<strong>GitHub:</strong>{" "}
				<a href={github} target="_blank" rel="noopener noreferrer">
					{github}
				</a>
			</p>
		</section>
	);
}
