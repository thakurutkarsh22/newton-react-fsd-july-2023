// IF you want to SEE ANyhting in the Screen then you have to CALL THE FUNCTION

import { useState } from "react";

function CounterComponent(props) {
  const { heading } = props;

  console.log("RENDERING", "function called");

  // Variable... (TO).
  //   let count = 1000;

  //   State -> its a variable only with gurantee if State changes then
  // my CounterComponent wiil the executed ONCE again

  const [count, setCount] = useState(0);

  const decrement = () => {
    // count = count - 1; // with state variable DO NOT USE THIS
    setCount(count - 1);

    console.log(count, "decrement clicked count");
  };

  const increment = () => {
    // count = count + 1;
    setCount(count + 1);

    console.log(count, "increment clicked count");
  };

  return (
    <>
      <h1>{heading}</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          margin: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div id="counter">{count}</div>
        <div style={{ display: "flex", gap: "10px", margin: "20px" }}>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </>
  );
}

export default CounterComponent;
