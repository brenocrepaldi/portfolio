import { ExperienceProps, JobProps } from "../../types";
import "./Experience.css";
import { JobItem } from "./job-list/job-item/JobItem";

export function Experience({ title, jobs }: ExperienceProps) {
	return (
		<section id="experience" className="experience-container">
			<h2>{title}</h2>
			<ul className="job-list" role="list">
				{jobs.map((job: JobProps, index: number) => (
					<JobItem key={index} job={job} />
				))}
			</ul>
		</section>
	);
}
