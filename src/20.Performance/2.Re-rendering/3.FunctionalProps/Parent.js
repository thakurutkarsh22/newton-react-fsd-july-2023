import { useCallback, useMemo, useState } from "react";
import Child from "./Child";

function Parent() {
  console.log("parent rendering");

  const [count, setcounter] = useState(0);

  let i = 12;

  // counterHandler here will have only 1 address across Re-renders;
  const counterHandler = useCallback(() => {
    setcounter((old) => old + 1);
  }, []);

  // abc@123 -> render 1
  // abc@111 -> render 2
  // function counterHandler() {
  //   setcounter((old) => old + 1);
  // }

  const arr = useMemo(() => [1, 2, 3, 4], []);
  const obj = {
    name: "utkars",
  };

  return (
    <>
      <h1>parent {count}</h1>

      <Child arr={arr} setcounter={counterHandler} />
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
