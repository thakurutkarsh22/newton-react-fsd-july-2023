import { useEffect, useState } from "react";

function PokemonApp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pokemon, setPokemon] = useState();

  console.log(pokemon, "pokemon data");

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/ditto";
    setLoading(true);

    async function fetchResults() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemon(data);
      } catch (errror) {
        setError(errror);
      } finally {
        setLoading(false);
      }
    }
    fetchResults();
  }, []);

  return (
    <>
      {loading ? (
        <div style={{ background: "red", color: "green" }}>
          LOADINGGGGGG..................
        </div>
      ) : !error ? (
        <>
          <div>Name: {pokemon?.name}</div>
          <div>ID: {pokemon?.id}</div>
        </>
      ) : (
        <div>ERROR </div>
      )}
    </>
  );
}

export default PokemonApp;
