export const DEFAULT_STORE_STATE = {
  toggle: true,
  loading: false,

  counter: 0,
};

function toggleReducer(state = DEFAULT_STORE_STATE, action) {
  const { type, data } = action;
  switch (type) {
    case "TOOGLE":
      return { ...state, toggle: !state.toggle };

    default:
      return state;
  }
}

export default toggleReducer;
