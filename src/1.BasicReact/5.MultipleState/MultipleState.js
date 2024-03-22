import { useState } from "react";

function MultipleState() {
  const [counter, setCounter] = useState(-1);
  const [name, setName] = useState("ankit");

  return (
    <>
      <div style={{ margin: "20px", border: "1px solid black" }}>{name}</div>

      <div style={{ margin: "20px", border: "1px solid black" }}>{counter}</div>

      <button
        onClick={() => {
          setCounter((oldValue) => {
            return oldValue + 1;
          });
        }}
      >
        CLAP
      </button>

      <button
        onClick={() => {
          setName("utkarsh");
        }}
      >
        utkarsh
      </button>

      <button>arun</button>
    </>
  );
}

export default MultipleState;
