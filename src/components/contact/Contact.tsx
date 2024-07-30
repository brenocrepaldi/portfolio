import { ContactsProps } from '../../types';

import './contact.css';

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
					<strong>Email:</strong>
					<a href={`mailto:${email.content}`} target="_blank">
						{email.content}
					</a>
				</div>

				<div className="contact-item">
					<strong>Telefone</strong>
					<a
						href={`https://web.whatsapp.com/send?phone=${phone.content}`}
						target="_blank"
					>
						{phone.content}
					</a>
				</div>

				<div className="contact-item">
					<strong>LinkedIn:</strong>

					<a href={linkedin.content} target="_blank" rel="noopener noreferrer">
						{linkedin.content}
					</a>
				</div>

				<div className="contact-item">
					<strong>GitHub:</strong>
					<a href={github.content} target="_blank" rel="noopener noreferrer">
						{github.content}
					</a>
				</div>
			</div>
		</section>
	);
}
