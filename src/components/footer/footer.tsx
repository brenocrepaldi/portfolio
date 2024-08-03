import './css/index.css';

import { FooterProps } from '../../types';

export function Footer({ text }: FooterProps) {
	return (
		<section id="footer" className="footer-container">
			<span dangerouslySetInnerHTML={{ __html: text }} />
		</section>
	);
}
