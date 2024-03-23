import { useState } from "react";

function SingleUseState() {
  const [state, setState] = useState({
    counter: -1,
    name: "ankit",
  });

  const { name, counter } = state;

  // const [counter, setCounter] = useState(-1);
  // const [name, setName] = useState("ankit");

  return (
    <>
      <div style={{ margin: "20px", border: "1px solid black" }}>{name}</div>

      <div style={{ margin: "20px", border: "1px solid black" }}>{counter}</div>

      <button
        onClick={() => {
          setState((oldState) => {
            return {
              ...oldState,
              counter: oldState.counter + 1,
            };
          });
        }}
      >
        CLAP
      </button>

      <button
        onClick={() => {
          setState((oldValue) => {
            return {
              ...oldValue,
              name: "utkarsh",
            };
          });
        }}
      >
        utkarsh
      </button>

      <button
        onClick={() => {
          setState((oldValue) => {
            return {
              ...oldValue,
              name: "arun",
            };
          });
        }}
      >
        arun
      </button>
    </>
  );
}

export default SingleUseState;

// 1. in this component we want to clap and inceremtn the count
// 2. when i click on names, Name should be displayed on top.
