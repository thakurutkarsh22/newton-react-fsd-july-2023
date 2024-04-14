import { useState } from "react";
import styles from "./PokemonCardComponent.module.css";
import PokemonModalComponent from "./PokemonModalComponent";
import BackDrop from "./BackDrop";

function PokemonCardComponent(props) {
  const { pokemon } = props;

  const { id, name, type, image } = pokemon;

  const [modal, setModal] = useState(false);

  // CARD FOR THE POKEMON.
  return (
    <>
      <div className={` ${styles["card-container"]} ${styles[type]} `}>
        <div className={styles.number}>#{id}</div>
        <img className={styles.image} src={image} alt="Pokemon" />
        <div className="detail-wrapper">
          <h3>{name}</h3>
          <p>Type: {type}</p>
        </div>

        <div
          onClick={() => {
            setModal((old) => !old);
          }}
          className={styles.knowmore}
        >
          Know More...
        </div>
      </div>

      {/* Modal  */}
      {/* {modal && <PokemonModalComponent pokemon={pokemon} />} */}
      {modal && (
        <BackDrop onClose={() => setModal(false)}>
          {" "}
          <PokemonModalComponent
            onClose={() => setModal(false)}
            pokemon={pokemon}
          />{" "}
        </BackDrop>
      )}
    </>
  );
}

export default PokemonCardComponent;
