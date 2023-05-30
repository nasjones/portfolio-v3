import { useEffect, useState } from "react";
import Game_holder from "./img/Game-holder.png";
import "./Extra.css";
import { CircularProgress } from "@mui/material";

export default function Extra() {
	const [recentGames, setRecentGames] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		(async () => {
			await fetch(process.env.REACT_APP_ENDPOINT, {
				headers: { Authorization: process.env.REACT_APP_API_KEY },
			})
				.then((response) => response.json())
				.then((body) => {
					const temp = body.games.map((item, i) => {
						return (
							<div className={`gameItem game-${i % 2}`} key={item.name}>
								<img
									src={item.image_url}
									onError={({ currentTarget }) => {
										currentTarget.onerror = null;
										currentTarget.src = { Game_holder };
									}}
									alt="missing-game :("
								/>
								<h2>{item.name}</h2>
							</div>
						);
					});

					setRecentGames(temp);
					setLoaded(true);
				});
		})();

		return () => {};
	}, []);

	return (
		<section className="sectionInfo columnSection">
			<h1>What I've Been playing!</h1>
			{loaded ? <div id="gameWrap">{recentGames}</div> : <CircularProgress />}
		</section>
	);
}
