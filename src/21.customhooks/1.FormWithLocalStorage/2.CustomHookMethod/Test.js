import useLocalStorage from "./useLocalStorage";

function Test() {
  const [grades, setGradesInLocalStorage] = useLocalStorage(
    "grades",
    "collegeHistory"
  );

  return (
    <>
      <h1>GRADES: {grades}</h1>

      <button onClick={() => setGradesInLocalStorage(Number(grades) + 1)}>
        button
      </button>
    </>
  );
}

export default Test;
