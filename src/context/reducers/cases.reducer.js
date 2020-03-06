const caseState = {
	supremeCases: [],
	appealCases: [],
};

function caseReducer(state = caseState, { type, payload = null }) {
	switch (type) {
		case 'GET_SUPREME_CASES':
			return {
				...state,
				supremeCases: payload,
			};
		case 'GET_APPEAL_CASES':
			return {
				...state,
				appealCases: payload,
			};
		default:
			return state;
	}
}

export default caseReducer;
