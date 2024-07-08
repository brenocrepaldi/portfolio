import { JobItem } from "./job-item/JobItem";

import { JobProps } from "../../../types";
interface JobListProps {
	jobs: JobProps[];
}

export function JobList({ jobs }: JobListProps) {
	return (
		<ul className="job-list" role="list">
			{jobs.map((job: JobProps, index: number) => (
				<JobItem key={index} job={job} />
			))}
		</ul>
	);
}
