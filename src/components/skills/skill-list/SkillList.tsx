import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faReact,
	faHtml5,
	faPython,
	faNodeJs,
	faJs,
	IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

import { SkillSet } from "../../../types";
import "./SkillList.css";

interface IconMap {
	[key: string]: IconDefinition;
}

const icons: IconMap = {
	faReact: faReact,
	faJs: faJs,
	faHtml5: faHtml5,
	faCss3Alt: faCss3Alt,
	faNodeJs: faNodeJs,
	faPython: faPython,
	faDatabase: faDatabase,
};

export function SkillList({ skillList }: SkillSet) {
	return (
		<ul className="skills-list">
			{skillList.map((item, index) => (
				<li key={`${item.name}-${index}`}>
					<div className="button-container">
						<button className="button skill">
							<div className="skill-logo">
								<FontAwesomeIcon
									icon={icons[item.icon]}
									className="skill-icon"
								/>
							</div>
							<div className="button-text">
								<span>{item.name}</span>
							</div>
						</button>
					</div>
				</li>
			))}
		</ul>
	);
}
