import { useDispatch, useSelector } from "react-redux";
import { TOOGLE_ACTION_OBJECT } from "./actions/action";

function ReduxComponent() {
  const toggleValue = useSelector((store) => store?.toggle);

  const dispatch = useDispatch();

  const bgcolor = toggleValue ? "white" : "black";

  return (
    <>
      <h1>Example of reedix</h1>
      <div
        style={{
          width: "50%",
          height: "50%",
          background: bgcolor,
          color: "white",
        }}
      >
        hello to the night
      </div>

      <button onClick={() => dispatch(TOOGLE_ACTION_OBJECT())}>
        click me TOGGLE me
      </button>
    </>
  );
}

export default ReduxComponent;
