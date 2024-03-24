import { useState } from "react";
import Child1Counter from "./Child1Counter";
import Child2OperationDIsplay from "./Child2OperationDIsplay";

function Parent() {
  const [info, setInfo] = useState();

  const child1ToParentCommunicator = (infoFromChild1) => {
    console.log("PARENT RECIEVED::::: ", infoFromChild1);
    setInfo(infoFromChild1);
  };

  return (
    <>
      {/* {infoFromChild1} */}
      <h1 style={{ margin: "10px", background: "red" }}>Welcome</h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        {/* Counter */}
        <Child1Counter handler={child1ToParentCommunicator} />

        {/* Operation Detail */}
        <Child2OperationDIsplay info={info} />
      </div>
    </>
  );
}

export default Parent;
