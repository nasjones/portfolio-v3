import React from "react";
import "./Work.css";
import Coinbase from "./img/coinbase-logo.png";
import QuizBowl from "./img/quizbowl.png";
import MyGames from "./img/MyGames.png";
import CrudHub from "./img/Crudhub.png";
import ShowTunes from "./img/Showtunes.png";
import "react-awesome-slider/dist/styles.css";
import WorkSection from "./WorkSection";
import {
	CoinbaseData,
	QuizBowlData,
	MyGamesData,
	CrudhubData,
	ShowtunesData,
} from "./Constants";

export default function Work() {
	return (
		<div className="scrollWrap">
			<WorkSection
				title={"Coinbase"}
				imgUrl={Coinbase}
				info={CoinbaseData.info}
			/>
			<hr />
			<WorkSection
				title={"Quizbowl"}
				imgUrl={QuizBowl}
				info={QuizBowlData.info}
				links={QuizBowlData.links}
			/>
			<hr />
			<WorkSection
				title={"MyGames"}
				imgUrl={MyGames}
				info={MyGamesData.info}
				links={MyGamesData.links}
			/>
			<hr />
			<WorkSection
				title={"Showtunes"}
				imgUrl={ShowTunes}
				info={ShowtunesData.info}
				links={ShowtunesData.links}
			/>
			<hr />
			<WorkSection
				title={"Crudhub"}
				imgUrl={CrudHub}
				info={CrudhubData.info}
				links={CrudhubData.links}
			/>
		</div>
	);
}
