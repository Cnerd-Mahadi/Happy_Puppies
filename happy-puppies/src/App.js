import { LoggedInProvider } from "./hooks/logged-in-hook";
import { OverLayProvider } from "./hooks/overlay-hook";
import { Hero } from "./pages/Hero";
import { DogProvider } from "./hooks/dog-hook";
import { CartProvider } from "./hooks/cart-hook";

function App() {
	return (
		<LoggedInProvider>
			<OverLayProvider>
				<DogProvider>
					<CartProvider>
						<div className="App">
							<Hero />
						</div>
					</CartProvider>
				</DogProvider>
			</OverLayProvider>
		</LoggedInProvider>
	);
}

export default App;
