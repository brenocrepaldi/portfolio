import { ContactItem } from './contact-item.tsx/contact-item';

import { ContactsProps } from '../../types';

import './contact.css';

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
