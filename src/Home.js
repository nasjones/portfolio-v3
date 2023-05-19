import avatar from "./img/Opeepsavatar.png";
import { Planet } from "react-planet";
import PlanetLink from "./PlanetLink";
import resume from "./img/newResume.png";
import work from "./img/projectsBot.png";
import mePic from "./img/meSticker.png";
import funPic from "./img/funSticker.png";
import React, { useMemo, useRef } from "react";
import "./Home.css";

export default function Home() {
	const windowSize = useRef(window.innerWidth);

	const orbit = useMemo(() => {
		let size = windowSize.current * 0.2;

		if (size < 180) size = windowSize.current * 0.4;

		return size;
	}, [windowSize]);

	return (
		<div className="center">
			<Planet
				centerContent={
					<div className="aviWrap">
						<div>
							<img src={avatar} className="Avi" alt="My-avi" />
							<h1>Click! or Swipe for more!</h1>
						</div>
					</div>
				}
				autoClose
				orbitRadius={orbit}
				hideOrbit
			>
				<PlanetLink image={work} to={"/work"} title={"Work"} />
				<PlanetLink image={resume} to={"/projects"} title={"Resume"} />

				<h1 id="nameTitle">Nassir Jones</h1>
				<PlanetLink image={mePic} to={"/me"} title={"Bio"} />
				<PlanetLink image={funPic} to={"/extra"} title={"More"} />
			</Planet>
		</div>
	);
}
