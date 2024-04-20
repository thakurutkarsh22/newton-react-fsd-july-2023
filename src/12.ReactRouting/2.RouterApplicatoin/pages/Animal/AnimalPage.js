import { useSearchParams } from "react-router-dom";
import Dog from "../../components/Animal/Dog";
import Cat from "../../components/Animal/Cat";

function AnimalPage() {
  //   console.log(window.location.search, " getiing serach non conventional way"); // we should never do this.
  let [searchParams, setSearchParams] = useSearchParams();

  const typeOfAnimal = searchParams.get("q");

  function showUI(type) {
    switch (type) {
      case "dog":
        return <Dog />;
      case "cat":
        return <Cat />;
      default:
        return <h4>No animal LIke this in animal knogdom</h4>;
    }
  }

  return (
    <>
      <h1>ANimals</h1>

      {showUI(typeOfAnimal)}
    </>
  );
}

export default AnimalPage;
