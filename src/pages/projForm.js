import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import styled from 'styled-components'
// import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
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
  label, float, input, ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={float}
    {...input}
    {...custom}
  />
)

// const renderRadioGroup = ({ input, ...rest }) => (
//   <RadioButtonGroup
//     {...input}
//     {...rest}
//     valueSelected={input.value}
//     onChange={(event, value) => input.onChange(value)}
//   />
// );

const userForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* <label>Project titles</label> */}
        <div>
          {/* <label>What's your github username?</label> */}
          <Field
            name="Founder"
            component={renderTextField}
            label="your github username"
            float="your github username"
            fullWidth
          />
        </div>
        <div>
          <Field
            name="Name"
            component={renderTextField}
            label="Name your idea!"
            float="Name your idea!"
            fullWidth
          />
        </div>
      </div>
      <div>
        {/* <label>Link us to the Github repo!</label> */}
        <div>
          <Field
            name="GitHubURL"
            component={renderTextField}
            label="https://github.com/UBCDUB/ideadate"
            float="Link to the github repo"
            fullWidth
          />
        </div>
      </div>
      <div>
        {/* <label>Provide a short pitch for your project!</label> */}
        <div>
          <Field name="Description" 
            component={renderTextField} 
            label="Provide a short (or long!) pitch for your project!" 
            float="Project pitch"
            multiLine={true} 
            row={5}
            fullWidth/>
        </div>
      </div>
      {/* <div>
        <label>What technologies do you think you'll use?</label>
        <div>
          <Field name="projTech" component="textarea" placeholder="ex) python; Machine Learning;"/>
        </div>
      </div> */}
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