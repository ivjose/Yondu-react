import React, { Component } from 'react';

class App extends Component {
    render() {
        const {
            children
        } = this.props

        return (
            <div>
            <h2>Test</h2>
                   {children}
            </div>
        );
    }
}

export default App;