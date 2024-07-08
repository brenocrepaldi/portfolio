import "./ProjectItem.css";

interface ProjectItemProps {
	index: number;
	src: string;
	name: string;
	description: string;
	url: string;
	technologyList: string[];
}

export function ProjectItem({
	index,
	src,
	name,
	description,
	url,
	technologyList,
}: ProjectItemProps) {
	return (
		<a href={url} target="_blank">
			<li key={index}>
				<img src={src} alt="Image Project" className="project-image" />
				<h3 className="project-name">
					{name}
					<svg
						className="job-arrow"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
							clip-rule="evenodd"
						></path>
					</svg>
				</h3>
				<p className="project-description">{description}</p>
				<ul className="technology-list">
					{technologyList.map((tech: string, index: number) => (
						<li key={index} className="technology-item">
							<p className="technology-text">{tech}</p>
						</li>
					))}
				</ul>
			</li>
		</a>
	);
}
