import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import AllTypes from "./components/AllTypes";
import AllPokemonsByType from "./components/AllPokemonsByType";
import SinglePokemonPage from "./page/SinglePokemonPage";
import OverviewPage from "./page/OverviewPage";
import { PokemonContext } from "./context/PokemonContext";
import { useState } from "react";
import { IAllPokemon } from "./interface/IAllPokemon";

function App() {
  const [allPokemon, setAllPokemon] = useState<IAllPokemon | null>(null);
  return (
    <>
      <PokemonContext.Provider value={{ allPokemon, setAllPokemon }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/type/" element={<AllTypes />} />
            <Route path="/pokemon/" element={<OverviewPage />} />
            <Route path="/type/:id" element={<AllPokemonsByType />} />
            <Route path="/pokemon/:id" element={<SinglePokemonPage />} />
          </Routes>
        </BrowserRouter>
      </PokemonContext.Provider>
    </>
  );
}

export default App;
