import { useEffect, useRef, useState } from "react";

function ShowLatestValAndPrevVal() {
  const [counterVal, setCounterVal] = useState(0);

  const ref = useRef("-");

  useEffect(() => {
    ref.current = counterVal;
  });

  return (
    <>
      <h1>Hello</h1>
      <h3>Prev VAL: {ref.current}</h3>
      <h3>LatestVal: {counterVal}</h3>

      <button onClick={() => setCounterVal((old) => old + 1)}>+1</button>
    </>
  );
}

export default ShowLatestValAndPrevVal;
