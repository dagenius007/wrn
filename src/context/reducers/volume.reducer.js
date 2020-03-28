const initialState = {
  volumes: [],
  volume: {}
};

function reducer(state = initialState, { type, payload = null }) {
  switch (type) {
    case "GET_VOLUMES":
      return {
        ...state,
        volumes: payload
      };
    default:
      return state;
  }
}

export default reducer;
