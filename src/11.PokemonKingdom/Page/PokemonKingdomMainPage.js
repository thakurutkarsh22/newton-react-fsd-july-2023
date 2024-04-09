import { useEffect, useState } from "react";
import styles from "./PokemonKingdomMainPage.module.css";
import PokemonCardComponent from "../Component/PokemonCardComponent";

function PokemonKingdomMainPage(props) {
  const [loading, setLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const url =
      "https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1";

    async function fetchPokemonList() {
      setLoading(true);

      const response = await fetch(url);
      let data = await response.json(); // [ {} ]
      data = data[0]; // {}

      console.log(data, "data");

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
      setPokemonData(listOfAllPokemons);

      setLoading(false);
    }

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

          <div className="app-container">
            <div className={styles["pokemon-container"]}>
              {pokemonData.map((pokemon) => {
                const { id, name, type, image } = pokemon;

                return (
                  <PokemonCardComponent
                    id={id}
                    name={name}
                    type={type}
                    image={image}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default PokemonKingdomMainPage;
