import { ExperienceProps, JobProps } from "../../types";
import "./Experience.css";

export function Experience({ title, jobs }: ExperienceProps) {
	return (
		<section id="experience" className="experience-container">
			<h2>{title}</h2>
			<ul className="job-list" role="list">
				{jobs.map((job: JobProps, index: number) => (
					<li key={index} className="job-item" role="listitem">
						<p className="job-duration">{job.duration}</p>
						<div className="job-details">
							<h3 className="job-title">
								{job.position} · {job.company}
							</h3>
							<p className="job-description">{job.description}</p>
							<ul className="technology-list">
								{job.technologies.map((tech: string, index: number) => (
									<li key={index} className="technology-item">
										<p className="technology-text">{tech}</p>
									</li>
								))}
							</ul>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
