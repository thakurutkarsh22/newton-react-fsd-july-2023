import { useState } from "react";
import Child from "./Child";

function Parent() {
  console.log("parent rendering");

  const [count, setcounter] = useState(0);

  return (
    <>
      <h1>parent {count}</h1>
      <button onClick={() => setcounter((old) => old + 1)}>Click me</button>
      <Child />
    </>
  );
}

export default Parent;
