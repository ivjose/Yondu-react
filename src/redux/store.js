import { compose, createStore, applyMiddleware } from 'redux';

// import { browserHistory } from 'react-router-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
// import createHistory from 'history/createBrowserHistory';
// import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import reducers from '../reducers';

// const history = syncHistoryWithStore(browserHistory)

const middleware = routerMiddleware(browserHistory)


let enhancers = null
if (process.env.NODE_ENV === 'production') {
    enhancers = compose(
        applyMiddleware(thunk, middleware)
    );
} else {
    enhancers = compose(
        applyMiddleware(thunk, middleware, logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );
}

/**
* CREATE STORE
*/
const store = createStore(
    reducers,
    enhancers

);


export { store };