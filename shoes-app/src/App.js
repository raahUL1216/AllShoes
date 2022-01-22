import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";
import './App.css';
import AllShoes from "./pages/AllShoes/AllShoes";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<AllShoes />}>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
