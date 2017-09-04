import React, { Component } from 'react';
import { Router, Route, Redirect, IndexRoute } from 'react-router';

// SMART CONTAINER
import App from './containers/App';
import Page404 from './containers/Page404';




class MainRoutes extends Component {
    render() {
        const {
            history
        } = this.props


        return (
            <Router history={history}>
                <Route name="App" path="/" component={App}>

                    <Route path="/Page404" component={Page404} />
                    <Redirect from='*' to='/Page404' />
                    
                </Route>
            </Router>
        );
    }
}

export default MainRoutes;