import { JobProps } from "../../../../../types";
import { TechnologyItem } from "./technology-item/TechnologyItem";

interface TechnologyListProps {
	job: JobProps;
}

export function TechnologyList({ job }: TechnologyListProps) {
	return (
		<ul className="technology-list">
			{job.technologies.map((tech: string, index: number) => (
				<TechnologyItem tech={tech} index={index} />
			))}
		</ul>
	);
}
