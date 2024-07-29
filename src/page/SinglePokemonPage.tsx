import { useEffect, useState } from "react";
import { IPokemon } from "../interface/IPokemon";
import { Link, useParams } from "react-router-dom";

const SinglePokemonPage = () => {
  const [singlePokemonDetail, setSinglePokemonDetail] =
    useState<IPokemon | null>(null);

  const { id } = useParams<{ id?: string }>();
  console.log(id);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setSinglePokemonDetail(data))
      .catch((err) => console.error("Fehler Detail page", err));
  }, [id]);

  console.log(singlePokemonDetail);

  return (
    <>
      <h1>{singlePokemonDetail?.name}</h1>
      <Link to="/pokemon">Back</Link>
      <p>{singlePokemonDetail?.height}</p>
      <img src={singlePokemonDetail?.sprites.front_default} alt="" />
    </>
  );
};

export default SinglePokemonPage;
