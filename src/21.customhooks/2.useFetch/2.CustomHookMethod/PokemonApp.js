import { useEffect, useState } from "react";
import useFetch from "./useFetch";

function PokemonApp() {
  const [data, loading, error] = useFetch(
    "https://pokeapi.co/api/v2/pokemon/ditto"
  );

  return (
    <>
      {loading ? (
        <div style={{ background: "red", color: "green" }}>
          LOADINGGGGGG..................
        </div>
      ) : !error ? (
        <>
          <div>Name: {data?.name}</div>
          <div>ID: {data?.id}</div>
        </>
      ) : (
        <div>ERROR </div>
      )}
    </>
  );
}

export default PokemonApp;
