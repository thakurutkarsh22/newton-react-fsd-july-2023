import styles from "./PokemonModalComponent.module.css";
import stylesCard from "./PokemonCardComponent.module.css";

function PokemonModalComponent(props) {
  const { pokemon } = props;
  const { height, weight, stats = [], id, name, type, image } = pokemon;

  return (
    <div className={`${styles.popupcontainer} ${stylesCard[type]}`}>
      {/* Cross sign */}
      <div
        className={styles.closebutton}
        onClick={() => {
          console.log("close this Popup");
        }}
      ></div>

      {/* left */}

      <div className={styles.leftcontainer}>
        <img className={styles.leftcontainerimage} src={image} alt={name} />
        <h4 className={styles.nametext}>{name}</h4>
      </div>

      {/* right */}

      <div className={styles.rightcontainer}>
        <div>
          <p>Weight: {weight}</p>
          <p>height: {height}</p>
        </div>

        {/* STATS */}

        <div>
          {Array.from(stats).map((statObj, index) => {
            const { stat } = statObj;
            const name = stat.name;

            return (
              <p>
                Stat{index + 1}: {name}
              </p>
            );
          })}
        </div>

        {/* STATS 2*/}

        <div>
          {Array.from(stats).map((statObj, index) => {
            const { base_stat } = statObj;

            return (
              <p>
                Bs{index + 1}: {base_stat}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PokemonModalComponent;
