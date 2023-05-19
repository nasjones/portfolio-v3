import React, { useRef } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import {
	withNavigationHandlers,
	withNavigationContext,
} from "react-awesome-slider/dist/navigation";
import { media } from "./Media";
import Home from "./Home";

const ContentSlider = withNavigationHandlers(AwesomeSlider);

export default withNavigationContext(({ fullpage }) => {
	const isFirstLoad = useRef(true);
	const animation = fullpage.navigation.animation || `fallAnimation`;

	return (
		<ContentSlider
			startupScreen={<Home />}
			startupDelay={0}
			animation="fallAnimation"
			className="slider"
			onTransitionEnd={() => {
				// HANDLE THE PAGE ELEMENTS ANIMATION ON FIRST TRANSITION END
				if (isFirstLoad.current === true) {
					document.querySelector("body").classList.add("animated");
					document.querySelector("body").classList.add("visible");
				}
			}}
			media={media}
		/>
	);
});
