import React from 'react'
import { Field, reduxForm } from 'redux-form'
import submit from './submit'

// import react-bootstrap dependencies
import { Col, Button, Form, FormGroup, FormFeedback, Label, Input, FormText } from 'reactstrap';


const renderField = ({ input, label, type, meta: { touched, error } }) =>
  <div>
    <input {...input} placeholder={label} type={type} />
    {touched &&
        error &&
        <FormFeedback>
            {error}
        </FormFeedback>}
  </div>

const SubmitValidationForm = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props
  return (
    <Form onSubmit={handleSubmit(submit)}>

        <h4>Sample Validation Form</h4>
        <FormGroup>
            <Label for="username">Username</Label>
            <Field
                name="username"
                type="text"
                component={renderField}
            />
        </FormGroup>

        <FormGroup>
            <Label for="password">Password</Label>
            <Field
                name="password"
                type="password"
                component={renderField}
            />
            {error &&
                <FormFeedback>
                    {error}
                </FormFeedback>}
        </FormGroup>

        <FormGroup>  
            <button type="submit" disabled={submitting}>
                Log In
            </button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
                Clear Values
            </button>
        </FormGroup>
    </Form>
  )
}

export default reduxForm({
  form: 'submitValidation' // a unique identifier for this form
})(SubmitValidationForm)