// Life Cycle of React COMPONENT

import { useState } from "react";

/*
mount, update,unmonut
*/

// Life Cycle of REACT/ React Project

/*
    1. Rendering -> Creation of Virtual DOM
    2. Reconciliation -> what are the changes we have to do in VD
    3. Commit -> 
*/

function Basics() {
  let i = 2;

  //   if (i == 2) {
  //     const [count, setCOunter] = useState(0);
  //   }

  const [count, setCOunter] = useState(0);

  console.log("rendering");

  return (
    <>
      <h1>Counter {count}</h1>

      <button onClick={() => setCOunter(5)}>click me</button>
    </>
  );
}

export default Basics;

/*
    1. HOOKS SHOULD never be used inside a condition.
    2. React DO not re-render the FUnction (component) if the prevStateValue === newSetStateValue
*/
