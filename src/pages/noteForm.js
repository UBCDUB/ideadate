import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'

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

const noteForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* <label>Pitch Yourself to the Project Owner!</label> */}
        <div>
          <Field 
            name="pitchNote" 
            component={renderTextField} 
            label="I have always been interested in this technology and would love to utilize it through a project!" 
            float="What improvements do you want to bring to the project?"
            multiLine={true} 
            rows="5"
            fullWidth/>
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
})(noteForm)