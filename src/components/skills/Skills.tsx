import { SkillList } from "./skill-list/SkillList";

import { SkillsProps } from "../../types";
import "./Skills.css";

export function Skills({ title, skillSet }: SkillsProps) {
	return (
		<section id="skills" className="skills-container">
			<h2>{title}</h2>
			<SkillList skillList={skillSet.skillList} />
		</section>
	);
}
