import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
	//stabilisco delle routes per le eventuali pagine
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
