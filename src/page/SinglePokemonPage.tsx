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
      <img src={singlePokemonDetail?.sprites.front_default} alt="" />
      <p>{singlePokemonDetail?.height}</p>

      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePokemonPage;
