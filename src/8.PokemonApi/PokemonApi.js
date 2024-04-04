import { useEffect, useState } from "react";

function PokemonApi() {
  const [phase, setPhase] = useState("MOUNTING PHASE");
  //   console.log(" CURRENT PHASE ::: ", phase);
  const [countOfClap, setCountOfClap] = useState(0);
  const [selectedPokemon, setSelectedPoken] = useState(null);

  console.log(selectedPokemon);

  const [pokemonData, setPokemonData] = useState({
    id: "",
    height: "",
    name: "",
    abilities: [],
  });

  const [loading, setLoading] = useState(false);

  //   console.log(pokemonData, "pokemonData");

  function convertBigDataIntoRelaventData(pokemonData) {
    const { id, height, name, abilities = [] } = pokemonData;

    const mappedAbilityArray = abilities.map((abilityObj) => {
      const { ability } = abilityObj;
      const { name } = ability;

      return name;
    });

    return {
      id,
      height,
      name,
      abilities: mappedAbilityArray,
    };
  }

  useEffect(() => {
    async function fetchPokeData() {
      try {
        // console.log("DO THE API FETCH ");
        setLoading(true);
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
        );
        // setLoading(false); // WE SHOULD DO IT HERE
        const data = await response.json();

        const relaventData = convertBigDataIntoRelaventData(data);

        setTimeout(() => {
          setPokemonData(relaventData);
          setLoading(false); // MOCK
        }, 8000);

        // setPhase("UPDATE PHASE");
      } catch (error) {
        alert("Error with the Server");
      }
    }

    fetchPokeData();
  }, [selectedPokemon]);

  function onSelectoinChange(event) {
    const value = event.target.value;
    setSelectedPoken(value);
  }

  return (
    <>
      <h1>Pokemon</h1>
      {/* {console.log("SHOW THE UI")} */}
      <button
        onClick={() => {
          setCountOfClap((old) => old + 1);
          setPhase("UPDATE PHASE");
        }}
      >
        Clap {countOfClap}
      </button>

      {/* SLELCT YOUR POKWMON  */}
      <div>
        <h1>Select pokemon</h1>
        <select onChange={onSelectoinChange}>
          <option value={""}>SELECT NEXT POKEMON (pokemon)</option>
          <option value={"ditto"}>DITTO (pokemon)</option>
          <option value={"pikachu"}>PIKACHU (pokemon)</option>
          <option value={"bulbasaur"}>BULBASAUR (pokemon)</option>
        </select>
      </div>

      {selectedPokemon && !loading ? (
        <div>
          <h1>Pokemon card</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: " 10px",
              border: "1px solid black",
              width: "500px",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "row", gap: " 10px" }}
            >
              <p>id: {pokemonData.id}</p>
              <p>name: {pokemonData.name}</p>
            </div>

            <div
              style={{ display: "flex", flexDirection: "row", gap: " 20px" }}
            >
              <p>abilities: {pokemonData.abilities.join(", ")}</p>
              <p>height: {pokemonData.height}</p>
            </div>
          </div>
        </div>
      ) : loading ? (
        <h1>LOADER ......</h1>
      ) : null}
    </>
  );
}

export default PokemonApi;

/*
    PROBLEM: 

    1. BEFORE showing the UI you are doing the API CALL which can Block the UI.
    2. if we have the api call directly then the API call will always happen in the UPDAte PHASE 

    i.e, if we update the component 100 times then the API call will also happen 100 times which is bad.

    SOLUTION: 
    useEffect(() => {}); // this will only solve 1st point and not 2nd.

    useEffect(() => {}, []); // this will solve all the points.

*/
