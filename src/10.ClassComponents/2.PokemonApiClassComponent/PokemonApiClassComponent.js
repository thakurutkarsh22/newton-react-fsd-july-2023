import { Component } from "react";
import HelloComponent from "../../1.BasicReact/1.HelloComponent/HelloComponent";
import HelloClassComponent from "../../1.BasicReact/1.HelloComponent/HelloClassComponent";

class PokemonApiClassComponent extends Component {

  state = {
    selectedPokemon: "",
    pokemonData: null,
  }

  convertBigDataIntoRelaventData(pokemonData) {
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


  onSelectionChange(event) {
    const value = event.target.value;
    this.setState((oldVal) => {
      return {
        ...oldVal,
        selectedPokemon: value
      }
    })
  }



  // USE EFFECT -> Working in MOUNTING PHASE ONLYYYYYYYY
  // componentDidMount works in MOUNTING PHASE ONLYYYYY
  componentDidMount() {
    console.log("component did mount");
    const url = "https://pokeapi.co/api/v2/pokemon/ditto";

    async function fetchData() {
      // context - this -> PokemonApiClassComponent 
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      this.setState((oldValue) => {
        return {
          ...oldValue,
          pokemonData: this.convertBigDataIntoRelaventData(data)
        }
      })


    }
    fetchData.call(this)

  }

  //  // USE EFFECT -> Working in UPDATE PHASE ONLYYYYYYYY
  // componentDidUpdate works in UPDATE PHASE ONLYYYYY
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate")

    console.log(prevState, 'prevState')
    console.log(this.state, 'newState')

    // DANGEROUSSSSS 

    // update state here 
    // NEVER UNCONDITIONALLY SET THE SATE INSIDE THE componentDidUpdate
    /*
    this.setState({
      selectedPokemon: "",
      pokemonData: null,
    })
    */


    // CONSDITIONAL SETTING STATE

    if (prevState.selectedPokemon !== this.state.selectedPokemon) {
      
      const url = `https://pokeapi.co/api/v2/pokemon/${this.state.selectedPokemon}`;

      async function fetchData() {
        // context - this -> PokemonApiClassComponent 
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
  
        this.setState((oldValue) => {
          return {
            ...oldValue,
            pokemonData: this.convertBigDataIntoRelaventData(data)
          }
        })

      }
      fetchData.call(this)
  
    }

   



  }
  

  render() {
    console.log("render")
    const {selectedPokemon, pokemonData} = this.state;
    const loading = false;
    return (
      <>

{/* POKEMON SELECTOR */}
      <div>
        <h1>Select pokemon</h1>
        <select onChange={this.onSelectionChange.bind(this)}>
          <option value={""}>SELECT NEXT POKEMON (pokemon)</option>
          <option value={"ditto"}>DITTO (pokemon)</option>
          <option value={"pikachu"}>PIKACHU (pokemon)</option>
          <option value={"bulbasaur"}>BULBASAUR (pokemon)</option>
        </select>
      </div>

{/* POKEMON CARD */}

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
}

export default PokemonApiClassComponent;
