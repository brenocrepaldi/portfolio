import { JobItem } from './job-item';

import { JobProps } from '../../types';

interface JobListProps {
	jobs: JobProps[];
}

export function JobList({ jobs }: JobListProps) {
	return (
		<ul className="job-list" role="list">
			{jobs.map((job: JobProps, index: number) => (
				<div key={index}>
					<JobItem job={job} />
				</div>
			))}
		</ul>
	);
}
