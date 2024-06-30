import { NavbarProps } from "../../../types";

import "./Navbar.css";

export function Navbar({ navbar }: { navbar: NavbarProps[] }) {
	const navItems = navbar.map(({ href, title }, index) => (
		<a key={index} href={`#${href}`} className="navbar-item">
			<p>{title}</p>
		</a>
	));

	return <nav className="navbar-container">{navItems}</nav>;
}
