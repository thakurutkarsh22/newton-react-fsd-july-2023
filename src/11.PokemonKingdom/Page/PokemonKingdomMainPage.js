import { useEffect, useState } from "react";
import styles from "./PokemonKingdomMainPage.module.css";
import PokemonCardComponent from "../Component/PokemonCardComponent";

function PokemonKingdomMainPage(props) {
  const url =
    "https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1";
  const [nextUrl, setNextUrl] = useState(url);

  console.log(nextUrl);

  const [loading, setLoading] = useState(false);
  let [pokemonData, setPokemonData] = useState([]);

  async function fetchPokemonList() {
    setLoading(true);

    const response = await fetch(nextUrl);
    let data = await response.json(); // [ {} ]
    data = data[0]; // {}

    console.log(data, "data");
    setNextUrl(data.next);

    const { results = [], next, count } = data;

    const listOfAllPokemons = [];

    for (let i = 0; i < results.length; i++) {
      const pokemonSmallObj = results[i];
      const { url: detailUrl, name } = pokemonSmallObj;

      const response = await fetch(detailUrl);
      let pokemonDetailData = await response.json();
      pokemonDetailData = pokemonDetailData[0];

      listOfAllPokemons.push(pokemonDetailData);
    }
    setPokemonData((oldData) => [...oldData, ...listOfAllPokemons]);

    setLoading(false);
  }

  useEffect(() => {
    fetchPokemonList();
  }, []);

  return (
    <>
      {loading ? (
        <h1>LOADING........</h1>
      ) : (
        <>
          <h1>Pokemon Kingdom Wolcome</h1>

          {/* POKEMON */}

          <div className={styles["app-container"]}>
            <div className={styles["pokemon-container"]}>
              {pokemonData.map((pokemon) => {
                const { id } = pokemon;

                return (
                  <div key={id}>
                    <PokemonCardComponent pokemon={pokemon} />
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => {
                console.log("Need to load More pokemons");
                fetchPokemonList();
              }}
              className={styles.loadmore}
            >
              Load More
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default PokemonKingdomMainPage;

// TODO: Improve THe rendering.
