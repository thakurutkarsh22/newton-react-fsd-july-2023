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

      <button
        onClick={() => {
          setName("arun");
        }}
      >
        arun
      </button>
    </>
  );
}

export default MultipleState;

// 1. in this component we want to clap and inceremtn the count
// 2. when i click on names, Name should be displayed on top.
