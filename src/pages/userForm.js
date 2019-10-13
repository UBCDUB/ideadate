import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import styled from 'styled-components'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
// import Checkbox from 'material-ui/Checkbox';
// import SelectField from 'material-ui/SelectField';
// import MenuItem from 'material-ui/MenuItem';

const But = styled.button`
  color: white;
  border-radius: 8%;
  border: 0;
  outline: none;
  font-family: CircularStd;
  font-size: 1.1em;
  box-shadow: none;
  background-color: #9954da;
  padding: 0.5em 0.7em 0.5em;
  margin: 2.5em 0.7em 0.5em;
`;

const renderTextField = ({
  label, input, float, ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={float}
    {...input}
    {...custom}
  />
)

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

const userForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* <label>What's your name?</label> */}
        <div>
          <Field
            name="Name"
            component={renderTextField}
            label="What's your name?"
            float="What's your name?"
            fullWidth
          />
        </div>
      </div>
      <div>
        {/* <label>Email</label> */}
        <div>
          <Field
            name="Email"
            component={renderTextField}
            label="What's your email?"
            float="What's your email?"
            fullWidth
          />
        </div>
      </div>
      {/* <div>
        <label>Choose your username</label>
        <div>
          <Field
            name="username"
            component="input"
            type="userid"
            placeholder="UserID"
          />
        </div>
      </div> */}
      <div>
        {/* <label>Github Account</label> */}
        <div>
          <Field
            name="Github"
            component={renderTextField}
            label="Enter your github username."
            float="Enter your github username."
            fullWidth
          />
        </div>
      </div>
      <div>
        <label><br /><br></br>What's your role? <br /> </label>
        <br />
        <div>
          <Field name="Role" component={renderRadioGroup}>
            <RadioButton value="designer" label="Designer" />
            <RadioButton value="frontend-dev" label="Frontend Developer" />
            <RadioButton value="backend-dev" label="Backend Developer" />
            <RadioButton value="project-manager" label="Project Manager" />
          </Field>
        </div>
      </div>
      <div>
        <label><br></br></label>
        <div>
          <Field name="Description" 
          component={renderTextField} 
          label="Tell us about yourself. This can be a short sentence or a long paragraph!"
          float="Describe yourself!"
          multiLine={true} 
          row={3}
          fullWidth/>
        </div>
      </div>
      <div>
        <label><br></br><br></br></label>
        <div>
          <Field name="TechStack" 
            component={renderTextField} 
            label="ex) html/css; React; MongoDB;" 
            float="What technologies you know?"
            multiLine={true}
            rows={3}
            fullWidth/>
        </div>
      </div>
      <div>
        <But type="submit" disabled={pristine || submitting}>
          Submit
        </But>
        <But type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </But>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(userForm)