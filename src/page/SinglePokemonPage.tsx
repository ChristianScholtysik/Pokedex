import { useEffect, useState } from "react";
import { IPokemon } from "../interface/IPokemon";
import { useParams } from "react-router-dom";

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
    <section
      className=" card-wrapper
    ">
      <div className="card bg-stone-100 w-96 shadow-xl">
        <figure>
          <img
            src={singlePokemonDetail?.sprites.front_default}
            alt={singlePokemonDetail?.name}
            className="image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {singlePokemonDetail?.name.toUpperCase()}
            <div className="badge badge-secondary">
              {singlePokemonDetail?.base_experience}
            </div>
          </h2>
          <p> {singlePokemonDetail?.weight} g</p>{" "}
          <p>{singlePokemonDetail?.height} cm </p>
          <p>Base Experince: {singlePokemonDetail?.base_experience}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline badge-primary">hello</div>
            <div className="badge badge-outline badge-secondary">Products</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePokemonPage;
