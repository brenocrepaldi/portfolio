import { JobProps } from '../../types';
import { TechnologyItem } from './technology-item';

interface TechnologyListProps {
	job: JobProps;
}

export function TechnologyList({ job }: TechnologyListProps) {
	return (
		<ul className="technology-list">
			{job.technologies.map((tech: string, index: number) => (
				<div key={index}>
					<TechnologyItem tech={tech} />
				</div>
			))}
		</ul>
	);
}
