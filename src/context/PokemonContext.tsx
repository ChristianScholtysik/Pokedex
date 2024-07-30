import { createContext } from "react";
import { IAllPokemon } from "../interface/IAllPokemon";

interface IPokemonContext {
  allPokemon: IAllPokemon | null;
  setAllPokemon: React.Dispatch<React.SetStateAction<IAllPokemon | null>>;
}

export const PokemonContext = createContext<IPokemonContext | null>(null);
