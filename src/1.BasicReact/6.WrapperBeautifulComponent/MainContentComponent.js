import styles from "./MainContentComponent.module.css";

function MainContentComponent() {
  return (
    <>
      <h1 className={styles.heading}>Sports</h1>

      <div>
        <div>
          SPORT1: s simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset she
        </div>

        <br />
        <br />

        <div>
          SPORT2: s simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a typ
        </div>
      </div>
    </>
  );
}

export default MainContentComponent;

// TO ADD CSS file we nned to make sure that our file have a name ending with
// .module.css

// RESPONSIBILITY of this component
// 1. TO GIVE THE CONTENT AND NOTHING ELSE.
