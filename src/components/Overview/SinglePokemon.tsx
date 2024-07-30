//

import { useEffect, useState } from "react";

import { IResult } from "../../interface/IAllPokemon";
import { IPokemon } from "../../interface/IPokemon";

interface ISinglePokemonProps {
  item: IResult;
}

const SinglePokemon: React.FC<ISinglePokemonProps> = (props) => {
  console.log(props.item.url);
  const [singlePokemon, setSinglePokemon] = useState<IPokemon | null>(null);

  useEffect(() => {
    fetch(props.item.url)
      .then((res) => res.json())
      .then((data) => setSinglePokemon(data))
      .catch((err) => console.error("Error by fetching data", err));
  }, []);

  console.log(singlePokemon);
  return (
    <section className="singlePokemon">
      <p>{singlePokemon?.name}</p>
      <p>{singlePokemon?.id}</p>
      <img
        src={singlePokemon?.sprites.other?.dream_world.front_default}
        alt={singlePokemon?.name}
      />
    </section>
  );
};

export default SinglePokemon;
