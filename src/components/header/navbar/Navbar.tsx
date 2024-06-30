import { NavbarProps } from "../../../types"; // Correct the import path

import "./Navbar.css";

export function Navbar({ navbar }: { navbar: NavbarProps[] }) {
	const navItems = navbar.map((item, index) => (
		<a key={index} href={`#${item.href}`} className="navbar-item">
			{item.title}
		</a>
	));

	return <nav className="navbar-container">{navItems}</nav>;
}
