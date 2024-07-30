import { useEffect, useState } from "react";
import { IPokemon } from "../interface/IPokemon";
import { useParams } from "react-router-dom";

const SinglePokemonPage = () => {
  const [singlePokemon, setSinglePokemon] = useState<IPokemon | null>(null);

  const { id } = useParams<{ id?: string }>();
  console.log(id);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setSinglePokemon(data))
      .catch((err) => console.error("Fehler Detail page", err));
  }, [id]);

  console.log(singlePokemon);

  return (
    <div className="hero hero-detail min-h-screen ">
      <section
        className=" card-wrapper hero-content bg-stone-900 hero-overlay bg-opacity-50 min-w-full
    ">
        <div className="card bg-yellow-400 w-96 shadow-xl text-white">
          <figure>
            <img
              src={singlePokemon?.sprites.front_default}
              alt={singlePokemon?.name}
              className="image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {singlePokemon?.name.toUpperCase()}
              <div className="badge badge-secondary">
                {singlePokemon?.base_experience}
              </div>
            </h2>
            <p> Weight: {singlePokemon?.weight} g</p>{" "}
            <p>Height: {singlePokemon?.height} cm </p>
            <p className="text-black">
              Base Experience: {singlePokemon?.base_experience}
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline badge-primary badge-lg">
                hello
              </div>
              <div
                className="badge badge-outline badge-secondary badge-lg tooltip"
                data-tip={singlePokemon?.order}>
                Products
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePokemonPage;
