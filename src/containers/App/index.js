import React, { Component } from 'react';

import SimpleForm from '../../components/Forms';

class App extends Component {
    render() {
        const {
            children
        } = this.props

        return (
            <div className="container">
                <h2>Test</h2>
                {children}
                <SimpleForm />
            </div>
        );
    }
}

export default App;