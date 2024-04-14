import styles from "./PokemonModalComponent.module.css";
import stylesCard from "./PokemonCardComponent.module.css";

function PokemonModalComponent(props) {
  const { pokemon, onClose } = props;
  const { height, weight, stats = [], id, name, type, image } = pokemon;

  return (
    <div className={`${styles.popupcontainer} ${stylesCard[type]}`}>
      {/* Cross sign */}
      <div
        className={styles.closebutton}
        onClick={() => {
          console.log("close this Popup");
          onClose();
        }}
      >
        X
      </div>

      {/* left */}

      <div className={styles.leftcontainer}>
        <img className={styles.leftcontainerimage} src={image} alt={name} />
        <h4 className={styles.nametext}>{name}</h4>
      </div>

      {/* right */}

      <div className={styles.rightcontainer}>
        <div>
          <p>
            <span>Weight:</span> {weight}
          </p>
          <p>
            <span>height:</span> {height}
          </p>
        </div>

        {/* STATS */}

        <div>
          {Array.from(stats).map((statObj, index) => {
            const { stat } = statObj;
            const name = stat.name;

            return (
              <p>
                <span>Stat{index + 1}:</span> {name}
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
                <span>Bs{index + 1}:</span> {base_stat}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PokemonModalComponent;
