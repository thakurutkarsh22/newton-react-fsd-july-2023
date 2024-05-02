import React from "react";

function Child() {
  console.log("child rendering");
  return (
    <>
      <h1
        style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
      >
        Child
      </h1>
    </>
  );
}

export default React.memo(Child);

/**
 *
 * React.memo -> Save the component and returns the same reference everytime
 * up untill the Props are not changed for the component.
 *
 */
