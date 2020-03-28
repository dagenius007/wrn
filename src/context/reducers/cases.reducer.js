const caseState = {
  supremeCases: [],
  appealCases: [],
  cases: [],
  case: {}
};

function caseReducer(state = caseState, { type, payload = null }) {
  switch (type) {
    case "GET_CASES":
      return {
        ...state,
        supremeCases: payload
      };
    case "GET_SUPREME_CASES":
      return {
        ...state,
        supremeCases: payload
      };
    case "GET_APPEAL_CASES":
      return {
        ...state,
        appealCases: payload
      };
    case "GET_CASE":
      return {
        ...state,
        case: payload
      };
    default:
      return state;
  }
}

export default caseReducer;
