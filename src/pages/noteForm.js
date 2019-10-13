import React from 'react'
import { Field, reduxForm } from 'redux-form'

const noteForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Pitch Yourself to the Project Owner!</label>
        <div>
          <Field
            name="pitchNote"
            component="textarea"
            placeholder="I have always been interested in this technology and would love to utilize it through a project!"
          />
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