import { ProjectList } from "./project-list/ProjectList";

import "./Projects.css";

import { ProjectsProps } from "../../types";

export function Projects({ title, projectList }: ProjectsProps) {
	return (
		<section id="projects">
			<h2>{title}</h2>
			<ProjectList projectList={projectList} />
		</section>
	);
}
