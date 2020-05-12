const reducer = (state = {}, action) => {
  if (action.type === "ADD_USER") {
    state.user = action.payload;
    return state;
  } else if (action.type === "ADD_WEDDING") {
    return {
      ...state,
      weddings: [action.payload],
    };
  } else {
    return state;
  }
};

export default reducer;
