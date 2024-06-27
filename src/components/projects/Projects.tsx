import { ProjectsProps, ProjectItemProps } from "../../types";

export function Projects({ title, list }: ProjectsProps) {
	return (
		<section>
			<h2>{title}</h2>
			<ul>
				{list.map((project: ProjectItemProps, index: number) => (
					<li key={index}>
						<h3>{project.name}</h3>
						<p>{project.description}</p>
						<a href={project.url} target="_blank" rel="noopener noreferrer">
							View Project
						</a>
					</li>
				))}
			</ul>
		</section>
	);
}
