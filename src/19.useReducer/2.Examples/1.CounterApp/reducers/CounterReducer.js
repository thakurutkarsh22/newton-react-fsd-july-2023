//  REDUCER FUNCTION:  NEVER MAKE IT IMPURE (DO NOT DO API, localStorage , changing variable)

export function reducerFunctionCounter(state, action) {
  const { type } = action;

  if (type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else if (type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (type === "RESET") {
    return {
      ...state,
      counter: 0,
    };
  } else if (type === "CHANGENAME") {
    return {
      ...state,
      name: "ASDASDASD NAME",
    };
  } else {
    return state;
  }
}
