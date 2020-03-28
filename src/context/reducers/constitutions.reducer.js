const initialState = {
  chapters: [],
  schedules: []
};

function reducer(state = initialState, { type, payload = null }) {
  switch (type) {
    case "SET_CHAPTERS":
      return {
        ...state,
        chapters: payload
      };
    case "SET_SCHEDULES":
      return {
        ...state,
        schedules: payload
      };
    default:
      return state;
  }
}

export default reducer;
