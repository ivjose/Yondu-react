import React, { Component } from 'react';

import SimpleForm from '../../components/Forms';

import SubmitValidationForm from '../../components/Forms/FormValidation';

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

                <SubmitValidationForm />
            </div>
        );
    }
}

export default App;