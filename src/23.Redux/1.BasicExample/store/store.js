import { createStore } from "redux";
import toggleReducer from "../reducers/ToggleReducer";

function basicReduxStore() {
  return createStore(toggleReducer);
}

export default basicReduxStore;
