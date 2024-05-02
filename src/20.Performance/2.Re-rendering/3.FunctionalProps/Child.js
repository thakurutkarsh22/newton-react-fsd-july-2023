import React from "react";

function Child(props) {
  const { arr, setcounter } = props;

  console.log("child rendering", arr);
  return (
    <>
      <h1
        style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
      >
        Child
      </h1>

      <button onClick={() => setcounter()}>Click me</button>

      {arr.map((item) => {
        return <div key={item}>{item * 2}</div>;
      })}
    </>
  );
}

export default React.memo(Child);

/*  
  Even though we had React.memo the Props was in change every render, It means that child component will be 
  re-render again n again 

  to fix this we have to make sure that our props are same.


*/
