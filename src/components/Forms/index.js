import React from 'react'
import { Field, reduxForm } from 'redux-form'

// import react-bootstrap dependencies
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const SimpleForm = props => {
  const { error, submit, handleSubmit, pristine, reset, submitting } = props

  const renderField = ({ input, label, type, meta: { touched, error } }) =>
  <div>
    <label>
      {label}
    </label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        error &&
        <span>
          {error}
        </span>}
    </div>
  </div>

  return (
    
    <Form onSubmit={handleSubmit(submit)}>
        <h4>Simple Form</h4>
        <FormGroup row>
            <Label htmlFor="exampleEmail" sm={2}>Email</Label>
            <Col sm={10}>
                <Field 
                    type="email" 
                    name="email" 
                    id="exampleEmail" 
                    placeholder="with a placeholder"
                    className="form-control"
                    component={renderField} 
                />
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label htmlFor="examplePassword" sm={2}>Password</Label>
            <Col sm={10}>
                <Field 
                    type="password" 
                    name="password" 
                    id="examplePassword" 
                    placeholder="password placeholder"
                    component={renderField}
                />
            </Col>
        </FormGroup>

        <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
            <Button type="submit">Submit</Button>
            </Col>
        </FormGroup>
    </Form>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)