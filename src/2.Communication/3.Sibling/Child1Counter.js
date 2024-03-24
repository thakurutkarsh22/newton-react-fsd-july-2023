import { useState } from "react";

function Child1Counter(props) {
  const [count, setCount] = useState(0);

  const { handler } = props;

  return (
    <>
      <div
        style={{ padding: "10px", margin: "10px", border: "1px solid black" }}
      >
        <h1>Counter</h1>
        <div>{count}</div>

        <button
          onClick={() => {
            setCount((oldVal) => oldVal - 1);
            handler("DECREMENT");
          }}
        >
          - dec
        </button>

        <button
          onClick={() => {
            setCount((oldVal) => oldVal + 1);
            handler("INCREMENT");
          }}
        >
          + inc
        </button>
      </div>
    </>
  );
}

export default Child1Counter;
