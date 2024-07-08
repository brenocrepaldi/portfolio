import { ProjectItem } from "./project-item/ProjectItem";

import "./ProjectList.css";

import { ProjectItemProps } from "../../../types";

interface ProjectListProps {
	projectList: ProjectItemProps[];
}

export function ProjectList({ projectList }: ProjectListProps) {
	return (
		<ul>
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
