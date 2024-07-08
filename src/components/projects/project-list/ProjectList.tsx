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
					name={project.name}
					description={project.description}
					url={project.url}
				/>
			))}
		</ul>
	);
}
