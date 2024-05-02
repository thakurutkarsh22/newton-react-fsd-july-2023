import { useMemo, useState } from "react";
import Child from "./Child";

function Parent() {
  console.log("parent rendering");

  const [count, setcounter] = useState(0);

  const arr = useMemo(() => [1, 2, 3, 4], []);
  const obj = {
    name: "utkars",
  };

  return (
    <>
      <h1>parent {count}</h1>
      <button onClick={() => setcounter((old) => old + 1)}>Click me</button>
      <Child arr={arr} />
    </>
  );
}

export default Parent;

/**
 * arr or obj in every render will have the different address making the child props different every time
 * die to this the React.memo() will not work in child.
 *
 * Thats why we use useMemo to make sure the arrays reference is not changing during re-rendring.
 *
 */
