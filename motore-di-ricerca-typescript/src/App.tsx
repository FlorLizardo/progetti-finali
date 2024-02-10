import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from './store/store'
import { Provider } from "react-redux";
import FavouriteCompany from "./components/FavouriteCompany";
import NavBar from "./components/NavBar";
import FooterSection from "./components/FooterSection";


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<FavouriteCompany />} />
      </Routes>
      <FooterSection />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
