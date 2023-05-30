import React, { useRef } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import {
	withNavigationHandlers,
	withNavigationContext,
} from "react-awesome-slider/dist/navigation";
import { media } from "./Media";
import Home from "./Home";

const ContentSlider = withNavigationHandlers(AwesomeSlider);

export default withNavigationContext(({ fullpage }) => {
	const isFirstLoad = useRef(true);

	return (
		<ContentSlider
			startupScreen={<Home />}
			startupDelay={0}
			animation="openAnimation"
			className="slider"
			infinite
			onTransitionEnd={() => {
				if (isFirstLoad.current === true) {
					document.querySelector("body").classList.add("animated");
					document.querySelector("body").classList.add("visible");
				}
			}}
			media={media}
		/>
	);
});
