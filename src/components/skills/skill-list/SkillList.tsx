import { SkillSet } from "../../../types";
import { SkillItem } from "./skill-item/SkillItem";
import "./SkillList.css";

export function SkillList({ skillList }: SkillSet) {
	return (
		<ul className="skills-list">
			{skillList.map((item, index) => (
				<SkillItem item={item} key={`${item.name}-${index}`} />
			))}
		</ul>
	);
}
