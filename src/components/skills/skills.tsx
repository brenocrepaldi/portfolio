import { SkillList } from './skill-list';

import './css/index.css';

import { SkillsProps } from '../../types';

export function Skills({ title, skillSet }: SkillsProps) {
	return (
		<section id="skills" className="skills-container">
			<h2>{title}</h2>
			<SkillList skillList={skillSet.skillList} />
		</section>
	);
}
