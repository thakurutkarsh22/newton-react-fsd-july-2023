import { useEffect, useState } from "react";

function HookUseEffect() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [phase, setPhase] = useState("MOUNTING PHASE");

  console.log("STAGE OF COMPONENT ::: ", phase);

  //   --------- ********* FLAVOURS OF USE EFFECT ******** ----------

  //   --- FLAVOUR 1 : useEffect with NO DEPENDENCY (MOUNTING, UPDATE, Unmouting) ALL the phases.

  /*
  //  ****  WE RARELY USE FLAVOUR 1 in real LIFE
  
  useEffect(() => {
    console.log("inside the use Effect");

    // ALWAYS WORKS IN UNMOUTING PHASE

    return () => {
      // in here we have to do cleanup
    //   clearingSetTimeout, clearing Intervals , removeEventListners 
      // we can make somethings null. so that it is GC collected.
      console.log("cleanup ::: UNMOUTING PHASE ");
    };
  });

  */

  //--- FLAVOUR 2 : useEffect with BLANK DEPENDENCY (MOUNTING, UNMOUTING).

  /*
  useEffect(() => {
    console.log("inside the use Effect");

    // Clenup -> Always work in UNMOUTING PHASE
    return () => {
      console.log("cleanup ::: UNMOUTING PHASE ");
    };
  }, []);

  */

  //   ------ FLAVOUR 3: useEffect with NON BLANK DEPENDENCY (MOUNTING, UNMOUTING, UPDATE(condition));
  useEffect(() => {
    console.log("inside the use Effect");

    // Clenup -> Always work in UNMOUTING PHASE
    return () => {
      console.log("cleanup ::: UNMOUTING PHASE ");
    };
  }, [counter2]);

  console.log("ABout to show the UI in 2 sec");

  return (
    <div style={{ border: "1px solid black" }}>
      {console.log("REALLY SHOWING THE UI")}
      <h1> HEADING {counter}</h1>
      <p>COunter 2: {counter2}</p>

      <button
        onClick={() => {
          setCounter((old) => old + 1);
          setPhase("UPDATE PHASE");
        }}
      >
        Click me To make an update
      </button>
    </div>
  );
}

export default HookUseEffect;
