import React from "react";
import { Link } from "react-awesome-slider/dist/navigation";
import { Link as ReactLink } from "react-router-dom";
import "./PlanetLink.css";

export default function PlanetLink({ image, to, title, download }) {
	return (
		<div className="linkWrap">
			{download ? (
				<ReactLink to={to} target="_blank">
					<img src={image} alt={to + "avi"} />
					<h2>{title}</h2>
				</ReactLink>
			) : (
				<Link href={to}>
					<img src={image} alt={to + "avi"} />
					<h2>{title}</h2>
				</Link>
			)}
		</div>
	);
}
