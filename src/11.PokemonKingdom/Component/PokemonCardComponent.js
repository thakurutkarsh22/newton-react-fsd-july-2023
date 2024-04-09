import styles from "./PokemonCardComponent.module.css";

function PokemonCardComponent(props) {
  const { id, name, type, image } = props;

  // CARD FOR THE POKEMON.
  return (
    <>
      {/* TODO: DISCUSS about DIfferent card container */}
      <div className={styles["card-container"]}>
        <div className="number">{id}</div>
        <img src={image} alt="Pokemon" />
        <div className="detail-wrapper">
          <h3>{name}</h3>
          <p>Type: {type}</p>
        </div>
      </div>
    </>
  );
}

export default PokemonCardComponent;
