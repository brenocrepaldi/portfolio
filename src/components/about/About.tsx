import { AboutProps } from "../../types";

import "./About.css"

export function About({ title, description }: AboutProps) {
	return (
		<section id="about" className="about-container">
			<h2>{title}</h2>
			<p>{description}</p>
		</section>
	);
}
