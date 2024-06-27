import { ExperienceProps, JobProps } from "../../types";

export function Experience({ title, jobs }: ExperienceProps) {
	return (
		<section>
			<h2>{title}</h2>
			<ul>
				{jobs.map((job: JobProps, index: number) => (
					<li key={index}>
						<h3>{job.company}</h3>
						<p>
							<strong>Position:</strong> {job.position}
						</p>
						<p>
							<strong>Duration:</strong> {job.duration}
						</p>
						<p>
							<strong>Description:</strong> {job.description}
						</p>
					</li>
				))}
			</ul>
		</section>
	);
}
