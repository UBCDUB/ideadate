import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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
        <br></br>
      </div>
      <div>
        <div>
          <Field name="Description" 
          component={renderTextField} 
          label="Tell us about yourself. This can be a short sentence or a long paragraph!"
          float="Description"
          multiLine={true} 
          row={7}/>
        </div>
      </div>
      <div>
        <label><br></br><br></br>What technology do you know?</label>
        <div>
          <Field name="TechStack" 
            component={renderTextField} 
            label="ex) html/css; React; MongoDB;" 
            float="Technology you know?"
            multiLine={true}
            rows={2}/>
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(userForm)