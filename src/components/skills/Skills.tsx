import { SkillsProps } from "../../types";

export function Skills({ title, list }: SkillsProps) {
	return (
		<section id="skills">
			<h2>{title}</h2>
			<ul>
				{list.map((item) => {
					return (
						<li>
							<p>{item}</p>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
