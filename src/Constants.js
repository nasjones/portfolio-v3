import { Link } from "react-router-dom";

export const CoinbaseData = {
	info: [
		"Lead the launch and post-launch maintenance of customer-facing products for Coinbase Prime's 13,000 institutional clients.",
		"Designed backend APIs and features in Ruby that served the needs of both customers and developers.",
		"Delivered and maintained clean, accessible code and ensured the codebase was always up to standard.",
	],
};

export const QuizBowlData = {
	info: [
		"Allows users to create quizzes about whatever they want.",
		"Quizzes can be made private for just friends or public for everyone.",
		"Javascript/ CSS/ HTML/ React/ Node/ PostgreSQL.",
	],
	links: [
		<Link
			to={"https://quiz-bowl-one.vercel.app/"}
			target="_blank"
			key="quizbowl-link"
		>
			Make a Quiz!
		</Link>,
		<Link
			to={"https://github.com/nasjones/quiz-maker-app"}
			target="_blank"
			key="quizbowl-git"
		>
			Check out the files
		</Link>,
	],
};

export const MyGamesData = {
	info: [
		"Helps users find new video games based on the ones they love.",
		"Provides similar game recommendations based off of searches.",
		"Allows users to save the games they come across to their account.",
		"Python/ JavaScript/ Flask/ PostgreSQL/ CSS/ HTML.",
	],
	links: [
		<Link
			to={"https://game-finder.herokuapp.com"}
			target="_blank"
			key="mygames-link"
		>
			Find some Reccommendations
		</Link>,
		<Link
			to={"https://github.com/nasjones/my_games"}
			target="_blank"
			key="mygames-git"
		>
			Check out the files
		</Link>,
	],
};

export const ShowtunesData = {
	info: [
		"Helps users to create playlists and discover new music.",
		"Users can specify length and genre of their playlist.",
		"Javascript/ CSS/ HTML/ React/ Node/ PostgreSQL.",
	],
	links: [
		<Link
			to={"https://show-tunes.vercel.app/"}
			target="_blank"
			key="showtunes-link"
		>
			Use Showtunes
		</Link>,
		<Link
			to={"https://github.com/nasjones/playlist-client"}
			target="_blank"
			key="showtunes-git"
		>
			Check out the files
		</Link>,
	],
};

export const CrudhubData = {
	info: [
		"Provides users with recipes as well as restaurants that satisfy their craving.",
		"Using Edamam and Google Places Api provides restaurants in half a mile.",
		"Javascript/ CSS/ HTML/ React/ Node/ PostgreSQL.",
	],
	links: [
		<Link
			to={"https://nasjones.github.io/Crudhub/"}
			target="_blank"
			key="crudhub-link"
		>
			Use Crudhub
		</Link>,
		<Link
			to={"https://github.com/nasjones/Crudhub"}
			target="_blank"
			key="crudhub-git"
		>
			Check out the files
		</Link>,
	],
};
