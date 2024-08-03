import { useState, useEffect } from 'react';

interface MousePosition {
	x: number;
	y: number;
}

export function MouseFollowsEvent(): JSX.Element {
	const [mousePosition, setMousePosition] = useState<MousePosition>({
		x: 0,
		y: 0,
	});

	const [isScreenWide, setIsScreenWide] = useState<boolean>(
		window.innerWidth >= 700
	);

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setMousePosition({ x: event.clientX, y: event.clientY });
		};

		const handleResize = () => {
			setIsScreenWide(window.innerWidth >= 700);
		};

		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const { x, y } = mousePosition;
	const backgroundStyle: React.CSSProperties = isScreenWide
		? {
				background: `radial-gradient(600px at ${x}px ${y}px, rgba(41, 128, 185, 0.15), transparent 80%)`,
		  }
		: {};

	return <div style={{ ...styles.background, ...backgroundStyle }}></div>;
}

const styles: { [key: string]: React.CSSProperties } = {
	background: {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100vw',
		height: '100vh',
		pointerEvents: 'none',
		zIndex: 10,
		transition: 'background 0.3s ease',
	},
};
