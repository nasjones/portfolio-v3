import React, { useState, useCallback } from "react";
import { RoughNotation } from "react-rough-notation";
import { Link } from "react-awesome-slider/dist/navigation";

import "./NavItem.css";

export default function NavItem({ title, link, active }) {
	const [focus, setFocus] = useState(false);

	const focusUpdate = useCallback((update) => {
		setFocus(update);
	}, []);

	return (
		<div>
			<RoughNotation
				type={"circle"}
				strokeWidth={2}
				color={active ? "#FF7700" : "#00AFB5"}
				iterations={2}
				animate={!active}
				show={active || focus}
			>
				<Link
					href={`/${link}`}
					onFocus={() => focusUpdate(true)}
					onBlur={() => setFocus(false)}
					onMouseOver={() => focusUpdate(true)}
					onMouseOut={() => setFocus(false)}
				>
					{title}
				</Link>
			</RoughNotation>
		</div>
	);
}
