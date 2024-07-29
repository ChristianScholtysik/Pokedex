import { useEffect, useState } from "react";

import SinglePokemon from "./SinglePokemon";

import { IAllPokemon } from "../../interface/IAllPokemon";

const AllPokemons = () => {
  const [pokeData, setPokeData] = useState<IAllPokemon | null>(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((res) => res.json())
      .then((data) => setPokeData(data))
      .catch((err) => console.error("Fetch failed", err));
  }, []);

  return (
    <>
      <section className="list">
        {pokeData?.results.map((pokemon, index) => (
          <SinglePokemon key={index} pokemon={pokemon} />
        ))}
      </section>
    </>
  );
};

export default AllPokemons;
