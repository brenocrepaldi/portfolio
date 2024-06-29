import { AboutProps } from "../../types";

export function About({ title, description }: AboutProps) {
	return (
		<section id="about">
			<h2>{title}</h2>
			<p>{description}</p>
		</section>
	);
}
