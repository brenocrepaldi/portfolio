import "./navbar.css";

interface NavbarProps {
	items: string[];
}

export function Navbar({ items }: NavbarProps) {
	const navItems = items.map((item, index) => (
		<a key={index} href={`#${item.toLowerCase()}`} className="navbar-item">
			{item}
		</a> // fix the href - it's getting in both languages
	));

	return <nav className="container">{navItems}</nav>;
}
