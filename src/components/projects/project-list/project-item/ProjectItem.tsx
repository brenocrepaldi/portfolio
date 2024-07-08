import "./ProjectItem.css";

interface ProjectItemProps {
	index: number;
	name: string;
	description: string;
	url: string;
}

export function ProjectItem({
	index,
	name,
	description,
	url,
}: ProjectItemProps) {
	return (
		<li key={index}>
			<h3>{name}</h3>
			<p>{description}</p>
			<a href={url} target="_blank" rel="noopener noreferrer">
				View Project
			</a>
		</li>
	);
}
