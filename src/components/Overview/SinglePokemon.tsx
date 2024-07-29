import { Link } from "react-router-dom";
import { IPokemon } from "../../interface/IPokemon";

interface ISinglePokemonProps {
  pokemon: IPokemon;
}

const SinglePokemon: React.FC<ISinglePokemonProps> = (props) => {
  return (
    <>
      <Link to={`/pokemon/${props.pokemon.id}`} className="pokemon">
        <img
          src={props.pokemon.sprites.front_default}
          alt={props.pokemon.name}
        />
        <h3>{props.pokemon.name}</h3>
        {/* <p>{props.pokemon.types}</p> */}
      </Link>
    </>
  );
};

export default SinglePokemon;
