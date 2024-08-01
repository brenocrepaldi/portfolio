interface TechnologyItemProps {
	tech: string;
	index: number;
}

export function TechnologyItem({ tech, index }: TechnologyItemProps) {
	return (
		<li key={index} className="technology-item">
			<p className="technology-text">{tech}</p>
		</li>
	);
}
