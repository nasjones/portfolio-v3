import React from "react";
import { Link } from "react-awesome-slider/dist/navigation";
import "./PlanetLink.css";

export default function PlanetLink({ image, to, title }) {
	return (
		<div className="linkWrap">
			<Link href={to}>
				<img src={image} />
				<h2>{title}</h2>
			</Link>
		</div>
	);
}
