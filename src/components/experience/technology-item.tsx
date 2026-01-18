interface TechnologyItemProps {
	tech: string;
}

export function TechnologyItem({ tech }: TechnologyItemProps) {
	return (
		<li className="technology-item">
			<p className="technology-text">{tech}</p>
		</li>
	);
}
