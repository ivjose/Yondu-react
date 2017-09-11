import React, { Component } from 'react';

import SimpleForm from '../../components/Forms';

class App extends Component {


    submit(values) {
        console.log(values,"TEST")
    }


    render() {
        const {
            children
        } = this.props

        return (
            <div className="container">
                <h2>Test</h2>
                {children}
                <SimpleForm onSubmit={this.submit}/>
            </div>
        );
    }
}

export default App;