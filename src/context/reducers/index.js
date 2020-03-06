// import combineReducers from 'react-combine-reducers';
import authReducer from './auth.reducer';
import caseReducer from './cases.reducer';

const combineReducers = reducers => (state, action) => {
	let hasChanged;
	const nextState = Object.keys(reducers).reduce((result, key) => {
		result[key] = reducers[key](state[key], action);
		hasChanged = hasChanged || result[key] !== state[key];
		return result;
	}, {});
	return hasChanged ? nextState : state;
};

const useCombineReducer = () => {
	const rootReducer = combineReducers({
		auth: authReducer,
		cases: caseReducer,
	});

	const initialState = {
		auth: {},
		cases: {},
	};

	return [rootReducer, initialState];
};

export default useCombineReducer;
