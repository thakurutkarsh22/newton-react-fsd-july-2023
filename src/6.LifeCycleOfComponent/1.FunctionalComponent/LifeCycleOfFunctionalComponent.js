import { useEffect, useState } from "react";

function LifeCycleOfFunctionalComponent() {
  const [greeting, setGreeting] = useState("Hello world");
  const [phase, setPhase] = useState("MOUNTING");

  console.log("RENDER !! || " + phase);

  //   --------***** BAD API CALL ****-------

  // One thing we have Established is tha this API call should happen after the UI is SHOWN.
  //   FOR THAT WE CANT PUT THE API CALL after the Return keyword.

  //   function apiCall() {
  //     //    --- REAL API CALL  -----
  //     // fetch("ggole") // 5sec 100ms
  //     console.log("API CALLE IS WORKING ");

  //     // ----  MOCKING THE API
  //     for (let i = 0; i < 3000000000; i++) {}
  //     console.log("API CALLE IS FINSISHED ");
  //   }

  //   apiCall();

  //   -------- **** **** ------------

  //   *********n --------- HERS THE SOLUTION TO ABOVE PROBLEM *********** ---------

  //   useEffect is the GURANTEE that ir will work After the UI is shown (return has worked)

  useEffect(() => {
    function apiCall() {
      console.log("USE EFFECT:: API CALLE IS WORKING ");
      for (let i = 0; i < 6000000000; i++) {}
      console.log("USE EFFECT:: API CALLE IS FINSISHED ");
    }
    apiCall();
  });

  console.log("UI IS ABOUT TO BE SHOWN");

  return (
    <div style={{ border: "1px solid black" }}>
      <h1>{greeting}</h1>

      <button
        onClick={() => {
          console.log("button clicked");
          setGreeting((old) => (old === "Hello world" ? "Bye" : "Hello world"));
          setPhase("UPDATE PHASE asdasdasd");
        }}
      >
        click
      </button>

      {/* pokemon */}

      {/* waiting for the reply from the server */}
    </div>
  );
}

export default LifeCycleOfFunctionalComponent;

// OBJECTIVE FOR THIS FILE:

// 1. learn about mounting, update and unmounting phase.
// 2. to know where to do API CALL, or how to run something after the RETURN keyword (UI).
