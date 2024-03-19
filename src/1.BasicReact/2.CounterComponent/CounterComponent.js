// IF you want to SEE ANyhting in the Screen then you have to CALL THE FUNCTION

import { useState } from "react";

// RENDER -> calling CounterComponent Function.
// RE-RENDER -> calling CounterComponent function again.

function CounterComponent(props) {
  const { heading } = props;

  console.log("RENDERING", "function called");

  // Variable... (TO).
  // let count = 1000;

  //   State -> its a variable only with gurantee if State changes then
  // my CounterComponent wiil the executed ONCE again

  let [count, setCount] = useState(0);

  const decrement = () => {
    // count = count - 1; // with state variable DO NOT USE THIS
    setCount(count - 1); // this is not the best way to DECREMENT

    // setCount DO NOT UPDATE THE COUNT THEN N THERE (there is some delay)

    // Why Delay ?
    /*
      React performance;

    */

    console.log(count, "decrement clicked count");
  };

  const increment = () => {
    // count = count + 1;

    // WHY THIS IS NOT CORRECT... .

    // setCount(count + 5);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // ONE rule to remember - >
    /*
      on setting If your New Value is DEPENDENT on old value, then DO not DO THIS
        setCount(count + 5);


      NOTE: you should ONLY use setCount((oldValue) => oldValue + 1); 
      only and only when the new Value is DEPENDENT on OLD VALUE otherwise 
      setCount(variable)is fine.
    */

    setCount((oldValue) => oldValue + 1);
    setCount((oldValue) => oldValue + 1);
    setCount((oldValue) => oldValue + 1);
    setCount((oldValue) => oldValue + 1);
    setCount((oldValue) => oldValue + 1);

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

/*
  How react is performant 
  1. REact buffer for CHANGE.
  2. use of Virtual DOm.

  https://legacy.reactjs.org/docs/reconciliation.html
*/
