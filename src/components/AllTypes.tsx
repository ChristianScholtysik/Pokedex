import { useEffect, useState } from "react";
import "./Types.css";
import Header from "./Header/Header";

interface ITypeOverview {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

const AllTypes = () => {
  const [types, setTypes] = useState<ITypeOverview | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  console.log(types);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type")
      .then((response) => response.json())
      .then((data) => setTypes(data))
      .catch((err) => console.error("Fetch failed", err));
  }, []);

  const filterByType = (type: string) => {
    setSelectedType(type);
  };

  return (
    <>
      <Header />
      <div className="type-wrapper">
        {types ? (
          <div>
            {types.results.map((type) => (
              <button
                onClick={() => filterByType(type.name)}
                key={type.name}
                className={`type-button type-${type.name}`}>
                {type.name}
              </button>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {selectedType && <p>Selected Type: {selectedType}</p>}
    </>
  );
};

export default AllTypes;
