import React, { useCallback, useMemo, useRef, useState } from "react";
import "./WorkSection.css";
import "react-awesome-slider/dist/styles.css";
import NewsTicker, { Directions } from "react-advanced-news-ticker";
import { ArrowBack, ArrowForward, Pause, PlayArrow } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function WorkSection({ imgUrl, title, info, links = [] }) {
	const [pausedState, setPaused] = useState(false);
	const newsTickerRef = useRef(null);

	const data = useMemo(
		() =>
			info.map((text, i) => (
				<div className="newsItem" key={title + "-" + text}>
					{text}
				</div>
			)),
		[info, title]
	);

	const togglePlay = useCallback(() => {
		let toggle = !pausedState;
		toggle ? newsTickerRef.current.pause() : newsTickerRef.current.unPause();
		setPaused(!pausedState);
	}, [pausedState]);
	return (
		<section
			className="sectionInfo"
			style={{
				backgroundImage: `url(${imgUrl})`,
			}}
		>
			<div className="contentWrap">
				<h1 className="contentHeader">{title}</h1>
				<div className="contentBody">
					<NewsTicker
						ref={newsTickerRef}
						className="ticker"
						direction={Directions.UP}
						rowHeight={150}
						maxRows={1}
						duration={3500}
						pauseOnHover={false}
					>
						{data}
					</NewsTicker>
					<div>
						<IconButton
							onClick={() => {
								newsTickerRef.current.movePrev();
							}}
						>
							<ArrowBack fontSize="large" color="white" />
						</IconButton>
						<IconButton
							onClick={() => {
								togglePlay();
							}}
						>
							{pausedState ? (
								<PlayArrow fontSize="large" />
							) : (
								<Pause fontSize="large" />
							)}
						</IconButton>
						<IconButton
							onClick={() => {
								newsTickerRef.current.moveNext();
							}}
						>
							<ArrowForward fontSize="large" />
						</IconButton>
					</div>
				</div>
				<div className="linkDisplay">{links}</div>
			</div>
		</section>
	);
}
