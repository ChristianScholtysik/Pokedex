import { useContext, useEffect } from "react";
import { PokemonContext } from "../context/PokemonContext";

const FetchAllPokemon = () => {
  const pokemonContext = useContext(PokemonContext);
  console.log(pokemonContext);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
      .then((res) => res.json())
      .then((data) => pokemonContext?.setAllPokemon(data))
      .catch((err) => console.error("Error by fetching data", err));
  }, []);

  return <></>;
};

export default FetchAllPokemon;
