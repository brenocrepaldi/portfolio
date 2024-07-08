import { ExperienceProps } from "../../types";

import { JobList } from "./job-list/JobList";

import "./Experience.css";

export function Experience({ title, jobs }: ExperienceProps) {
	return (
		<section id="experience" className="experience-container">
			<h2>{title}</h2>
			<JobList jobs={jobs} />
		</section>
	);
}
