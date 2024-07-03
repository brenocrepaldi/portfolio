import { ExperienceProps, JobProps } from "../../types";
import "./Experience.css";

export function Experience({ title, jobs }: ExperienceProps) {
	return (
		<section id="experience" className="experience-container">
			<h2>{title}</h2>
			<ul className="job-list" role="list">
				{jobs.map((job: JobProps, index: number) => (
					<a
						href="https://www.linkedin.com/company/espectro-ltda-/"
						target="_blank"
					>
						<li key={index} className="job-item" role="listitem">
							<p className="job-duration">{job.duration}</p>
							<div className="job-details">
								<h3 className="job-title">
									{job.position} <strong>·</strong> {job.company}
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
					</a>
				))}
			</ul>
		</section>
	);
}
