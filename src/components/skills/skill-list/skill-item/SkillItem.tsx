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

import { SkillListProps } from "../../../../types";

import "./SkillItem.css";

interface SkillItemProps {
	item: SkillListProps;
	key: string;
}

interface IconMap {
	[key: string]: IconDefinition;
}

const icons: IconMap = {
	react: faReact,
	javascript: faJs,
	html5: faHtml5,
	css3: faCss3Alt,
	nodeJs: faNodeJs,
	python: faPython,
	database: faDatabase,
};

export function SkillItem({ item, key }: SkillItemProps) {
	return (
		<li key={key}>
			<div className="button-container">
				<button className="button skill">
					<div className="skill-logo">
						<FontAwesomeIcon icon={icons[item.icon]} className="skill-icon" />
					</div>
					<div className="button-text">
						<span>{item.name}</span>
					</div>
				</button>
			</div>
		</li>
	);
}