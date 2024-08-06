import { ContactItem } from './contact-item';

import { ContactsProps } from '../../types';

import './css/index.css';

export function Contact({ title, contactList }: ContactsProps) {
	return (
		<section className="contact-container" id="contact">
			<h2>{title}</h2>
			<div className="contact-list">
				{contactList.map((contactItem, index) => {
					return (
						<ContactItem
							key={index}
							title={contactItem.title}
							content={contactItem.content}
							icon={contactItem.icon}
						/>
					);
				})}
			</div>
		</section>
	);
}
