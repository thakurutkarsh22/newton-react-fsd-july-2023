import { useState } from "react";
import switchListData, { overseasData } from "./data";
import Card from "./Card";

function SwitchList() {
  const [list1, setList1] = useState(switchListData);
  const [list2, setList2] = useState(overseasData);

  function handleClick(id, list, title) {
    console.log(id, list, title, "want to delte itself");

    // TODO: you guys have to do.

    return;
  }

  return (
    <>
      <h1>List 1</h1>
      {list1.map((item) => {
        return <Card {...item} list={"LIST1"} handleClick={handleClick} />;
      })}

      {/* List 2 */}

      <h1>List 2</h1>
      {list2.map((item) => {
        return <Card {...item} list={"LIST2"} handleClick={handleClick} />;
      })}
    </>
  );
}

export default SwitchList;
