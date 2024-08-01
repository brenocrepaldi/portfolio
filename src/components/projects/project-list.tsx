import { ProjectItemProps } from '../../types';
import { ProjectItem } from './project-item';

interface ProjectListProps {
	projectList: ProjectItemProps[];
}

export function ProjectList({ projectList }: ProjectListProps) {
	return (
		<ul className="project-list">
			{projectList.map((project: ProjectItemProps, index: number) => (
				<ProjectItem
					index={index}
					src={project.image}
					name={project.name}
					description={project.description}
					url={project.url}
					technologyList={project.technologies}
				/>
			))}
		</ul>
	);
}
