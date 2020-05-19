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
    return {
      ...state,
      partner: action.payload,
    };
  } else if (action.type === "ADD_CLIENTS_FROM_SERVER") {
    return {
      ...state,
      clients: action.payload,
    };
  } else if (action.type === "ADD_CLIENT") {
    return {
      ...state,
      clients: [...state.clients, action.payload],
    }
  }
   else {
    return state;
  }
};

export default reducer;
