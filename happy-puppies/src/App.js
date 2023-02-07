import { LoggedInProvider } from "./hooks/logged-in-hook";
import { OverLayProvider } from "./hooks/overlay-hook";
import { Hero } from "./pages/Hero";
import { useDogs } from "./hooks/useGetDogInfo";
import { useAPI } from "./hooks/useAPI";
import { useEffect } from "react";

function App() {
	// console.log("App Level- DIST");
	return (
		<LoggedInProvider>
			<OverLayProvider>
				<div className="App">
					<Hero />
				</div>
			</OverLayProvider>
		</LoggedInProvider>
	);
}

export default App;
