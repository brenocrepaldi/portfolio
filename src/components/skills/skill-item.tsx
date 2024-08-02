import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faReact,
	faHtml5,
	faPython,
	faNodeJs,
	faJs,
	faGitAlt,
	faGithub,
	IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';

import { SkillListProps } from '../../types';

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
	gitHub: faGithub,
	git: faGitAlt,
	python: faPython,
	sql: faDatabase,
	postgre: faServer,
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
						<strong>{item.name}</strong>
					</div>
				</button>
			</div>
		</li>
	);
}
