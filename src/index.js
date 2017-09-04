
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import {  BrowserRouter as Router} from 'react-router-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { store } from './redux/store';

import MainRoutes from './MainRoutes';
// import Routes from './Routes'
// import { App } from './containers';
// import App from './containers/App';


const history = syncHistoryWithStore(browserHistory, store)

render(

    <Provider store={store}>
        <MainRoutes history={history} />
    </Provider>,
    document.getElementById('root')
);  