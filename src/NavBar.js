import React, { useMemo } from "react";
import NavItem from "./NavItem";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import "./NavBar.css";

const Navbar = withNavigationContext(({ fullpage }) => {
	const { slug } = fullpage.navigation;

	const NavItems = useMemo(() => {
		const Items = {
			Home: "",
			Work: "work",
			Me: "me",
			Extra: "extra",
		};
		return Object.entries(Items).map(([name, link]) => {
			return (
				<NavItem
					title={name}
					link={link}
					active={slug === link}
					slug={slug}
					key={`navItem-${name}`}
				/>
			);
		});
	}, [slug]);

	return slug === "" ? null : <div id="navBar">{NavItems}</div>;
});

export default Navbar;
