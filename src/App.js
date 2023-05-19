import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./NavBar";

import ContentSlider from "./ContentSlider";
import { Provider } from "react-awesome-slider/dist/navigation";

function App() {
	const location = useLocation();
	return (
		<div className="App">
			<Provider slug={location.pathname}>
				<Navbar />
				<Routes>
					<Route path="*" element={<ContentSlider />} />
				</Routes>
			</Provider>
		</div>
	);
}

export default App;
