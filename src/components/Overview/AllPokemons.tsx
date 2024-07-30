// import { useContext } from "react";

// import SinglePokemon from "./SinglePokemon";
// import { PokemonContext } from "../../context/PokemonContext";

// const AllPokemon = () => {
//   const pokemonContext = useContext(PokemonContext);

//   console.log(pokemonContext);
//   if (pokemonContext?.allPokemon === null) {
//     return <h1>Loading...</h1>;
//   }
//   return (
//     <section className="allPokemon">
//       <h1>All Pokemons:</h1>
//       {pokemonContext?.allPokemon.results.map((item, index) => (
//         <SinglePokemon key={index} item={item} />
//       ))}
//     </section>
//   );
// };

// export default AllPokemon;
import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import SinglePokemon from "./SinglePokemon";

const AllPokemon = () => {
  const pokemonContext = useContext(PokemonContext);

  console.log(pokemonContext);

  if (pokemonContext?.allPokemon === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="allPokemon">
      <h1>All Pokemons</h1>

      {pokemonContext?.allPokemon.results.map((item, index) => (
        <SinglePokemon key={index} item={item} />
      ))}
    </section>
  );
};

export default AllPokemon;
