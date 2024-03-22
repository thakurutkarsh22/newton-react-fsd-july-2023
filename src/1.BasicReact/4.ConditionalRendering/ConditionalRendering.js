import { useState } from "react";
import ContainerTime from "./ContainerTime";

function ConditionalRendering(props) {
  const [value, setValue] = useState(false); // value represent if the bulb is on or OFF
  // Value false means NIGHT
  // Value true means DAY.

  //  1.   THIS CODE IS BAD NEVER DO THIS .....

  /*

  using document keyword in react should not be used unless VVVVVV important.

function makeDay() {
    const elemetn = document.getElementById("container");
    elemetn.style.background = "yellow";
  }

  function makeNight() {
    const elemetn = document.getElementById("container");
    elemetn.style.background = "gray";
  }
  */

  //   2. Conditional Rendering.
  /*
    with certain condition render a UI.

  */

  return (
    <>
      {value === false && <ContainerTime color={"black"} />}
      {value === true && <ContainerTime color={"yellow"} />}

      <button
        onClick={() => {
          setValue(true);
        }}
      >
        Day
      </button>

      <button
        onClick={() => {
          setValue(false);
        }}
      >
        Night
      </button>
    </>
  );
}

export default ConditionalRendering;
