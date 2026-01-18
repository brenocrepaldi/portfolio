import {
	SiReact,
	SiTypescript,
	SiJavascript,
	SiHtml5,
	SiCss3,
	SiNodedotjs,
	SiGithub,
	SiGit,
	SiPython,
	SiPostgresql,
	SiTailwindcss,
	SiFlask,
	SiFastapi,
	SiMysql,
	SiSqlite,
	SiMongodb,
	SiDocker,
	SiPostman,
	SiDatagrip,
	SiC,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { VscCode } from 'react-icons/vsc';
import { IconType } from 'react-icons';

import { SkillListProps } from '../../types';

interface SkillItemProps {
	item: SkillListProps;
}

interface IconMap {
	[key: string]: IconType;
}

const icons: IconMap = {
	react: SiReact,
	typescript: SiTypescript,
	javascript: SiJavascript,
	html5: SiHtml5,
	css3: SiCss3,
	tailwindcss: SiTailwindcss,
	nodeJs: SiNodedotjs,
	python: SiPython,
	flask: SiFlask,
	fastapi: SiFastapi,
	java: DiJava,
	c: SiC,
	postgresql: SiPostgresql,
	mysql: SiMysql,
	sqlite: SiSqlite,
	mongodb: SiMongodb,
	docker: SiDocker,
	postman: SiPostman,
	vscode: VscCode,
	datagrip: SiDatagrip,
	git: SiGit,
	gitHub: SiGithub,
};

export function SkillItem({ item }: SkillItemProps) {
	const Icon = icons[item.icon];

	if (!Icon) {
		console.warn(`Icon not found for: ${item.icon}`);
		return null;
	}

	return (
		<li>
			<div className="button-container">
				<div className="button skill">
					<div className="skill-logo">
						<Icon className="skill-icon" />
					</div>
					<div className="button-text">
						<span>{item.name}</span>
					</div>
				</div>
			</div>
		</li>
	);
}
