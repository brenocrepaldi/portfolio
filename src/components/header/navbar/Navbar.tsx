import "./Navbar.css";

interface NavbarProps {
	items: string[];
}

export function Navbar({ items }: NavbarProps) {
	const navItems = items.map((item, index) => (
		<a key={index} href={`#${item.toLowerCase()}`} className="navbar-item">
			{item}
		</a> // fix the href - it's getting both languages
	));

	return <nav className="navbar-container">{navItems}</nav>;
}
