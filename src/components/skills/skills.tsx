import { SkillList } from './skill-list';

import './css/index.css';

import { SkillsProps } from '../../types';

export function Skills({ title, categories }: SkillsProps) {
	return (
		<section id="skills" className="skills-container">
			<h2>{title}</h2>
			<div className="skills-categories">
				{categories.map((category, index) => (
					<div key={index} className="skill-category">
						<h3 className="category-title">{category.name}</h3>
						<SkillList skillList={category.skills} />
					</div>
				))}
			</div>
		</section>
	);
}
