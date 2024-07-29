import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import AllTypes from "./components/AllTypes";
import AllPokemonsByType from "./components/AllPokemonsByType";
import SinglePokemonPage from "./page/SinglePokemonPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/type" element={<AllTypes />} />
          <Route path="/pokemon" element={<AllTypes />} />
          <Route path="/type/:id" element={<AllPokemonsByType />} />
          <Route path="/pokemon/:id" element={<SinglePokemonPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
