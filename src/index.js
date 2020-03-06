import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import reducers from 'redux/reducers';
import sagas from 'redux/sagas';
import Router from 'router';
import Localization from 'components/LayoutComponents/Localization';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from './fragmentTypes.json';

import * as serviceWorker from './serviceWorker';

// Import Context
import useCombineReducer from './context/reducers';
import AppContext from 'context';

// app styles
import './global.scss';

const fragmentMatcher = new IntrospectionFragmentMatcher({
	introspectionQueryResultData,
});

const link = createHttpLink({
	uri: 'https://wrn-server.herokuapp.com/',
	credentials: 'include',
});

const client = new ApolloClient({
	cache: new InMemoryCache({ fragmentMatcher }),
	link,
});

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, sagaMiddleware, routeMiddleware];
if (process.env.NODE_ENV === 'development' && true) {
	middlewares.push(logger);
}
const store = createStore(reducers(history), compose(applyMiddleware(...middlewares)));
sagaMiddleware.run(sagas);

const [rootReducer, initialState] = useCombineReducer();

const App = () => {
	const [state, dispatch] = useReducer(rootReducer, initialState);
	return (
		<ApolloProvider client={client}>
			<Provider store={store}>
				<AppContext.Provider value={[state, dispatch]}>
					<Localization>
						<Router history={history} />
					</Localization>
				</AppContext.Provider>
			</Provider>
		</ApolloProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.register();
export { store, history };
