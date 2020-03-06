import React, { createContext, useContext } from 'react';

const AppContext = createContext();

export const useStore = () => {
	const [state, dispatch] = useContext(AppContext);

	return [state, dispatch];
};

export default AppContext;
