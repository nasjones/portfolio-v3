import { useEffect, useState } from "react";
import Game_holder from "./img/Game-holder.png";
import "./Extra.css";

export default function Extra() {
	const [recentGames, setRecentGames] = useState([]);

	useEffect(() => {
		(async () => {
			await fetch(process.env.REACT_APP_ENDPOINT, {
				headers: { Authorization: process.env.REACT_APP_API_KEY },
			})
				.then((response) => response.json())
				.then((body) => {
					const temp = body.games.map((item) => {
						return (
							<div className="gameItem">
								<img
									src={item.image_url}
									onError={({ currentTarget }) => {
										currentTarget.onerror = null;
										currentTarget.src = { Game_holder };
									}}
								/>
								<h2>{item.name}</h2>
							</div>
						);
					});
					setRecentGames(temp);
				});
		})();

		return () => {};
	}, []);

	return (
		<section className="sectionInfo columnSection">
			<h1>What I've Been playing!</h1>
			<div id="gameWrap">{recentGames}</div>
		</section>
	);
}
