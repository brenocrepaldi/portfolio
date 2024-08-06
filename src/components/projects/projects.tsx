import { ProjectList } from './project-list';

import './css/index.css';

import { ProjectsProps } from '../../types';

export function Projects({ title, projectList }: ProjectsProps) {
	return (
		<section id="projects" className="projects-container">
			<h2>{title}</h2>
			<ProjectList projectList={projectList} />
		</section>
	);
}
