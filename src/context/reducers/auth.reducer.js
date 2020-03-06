const authState = {
	user: {},
	isAuthenticated: false,
};

function authReducer(state = authState, { type, payload = null }) {
	switch (type) {
		case 'SET_USER':
			return {
				...state,
			};
		default:
			return state;
	}
}

export default authReducer;
