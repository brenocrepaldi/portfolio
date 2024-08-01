import { SkillItem } from './skill-item';

import { SkillSet } from '../../types';

export function SkillList({ skillList }: SkillSet) {
	return (
		<ul className="skills-list">
			{skillList.map((item, index) => (
				<SkillItem item={item} key={`${item.name}-${index}`} />
			))}
		</ul>
	);
}
