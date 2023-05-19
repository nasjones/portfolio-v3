import Home from "./Home";
import Navbar from "./NavBar";
import Work from "./Work";
import Bio from "./Bio";
import Extra from "./Extra";

export const media = [
	{
		slug: "",

		children: <Home />,
	},
	{
		slug: "work",

		children: <Work />,
	},
	{
		slug: "me",

		children: <Bio />,
	},
	{
		slug: "extra",

		children: <Extra />,
	},
];
