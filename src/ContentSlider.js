import React, { useRef } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
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
			animation="cubeAnimation"
			className="slider"
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
