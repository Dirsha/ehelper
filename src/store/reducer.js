const reducer = (state = {}, action) => {
  if (action.type === "ADD_USER") {
    state.user = action.payload;
    return state;
  } else if (action.type === "ADD_WEDDING") {
    return {
      ...state,
      weddings: [action.payload],
    };
  } else if (action.type === "ADD_PARTNER") {
    state.partner = action.payload;
    return state;
  } else if (action.type === "CLIENTS_FROM_SERVER") {
    state.clients = action.payload;
    return state;
  } else {
    return state;
  }
};

export default reducer;
