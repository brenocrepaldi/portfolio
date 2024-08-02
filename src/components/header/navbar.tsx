import { NavbarProps } from '../../types';

export function Navbar({ navbar, islogoVisible }: NavbarProps) {
	function handleScroll(
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) {
		event.preventDefault();
		const targetId = event.currentTarget.getAttribute('href')!.substring(1);
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			const block = targetId === 'projects' ? 'start' : 'center';

			targetElement.scrollIntoView({
				behavior: 'smooth',
				block: block,
			});
		}
	}

	return (
		<nav className="navbar-container">
			{islogoVisible && (
				<a href="#home">
					<span className="home-ancor">Breno Crepaldi</span>
				</a>
			)}

			{navbar.map(({ href, title }, index) => (
				<a key={index} href={`#${href}`} onClick={handleScroll}>
					<p className="navbar-item">{title}</p>
				</a>
			))}
		</nav>
	);
}
