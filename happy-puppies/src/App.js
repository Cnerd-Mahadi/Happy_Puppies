import { Provider } from "react-redux";
import { Hero } from "./pages/Hero";
import { store } from "./store/store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Hero />
			</div>
		</Provider>
	);
}

export default App;
