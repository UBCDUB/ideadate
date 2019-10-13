import React from 'react'
import { Field, reduxForm } from 'redux-form'

const userForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Project titles</label>
        <div>
          <label>What's your github username?</label>
          <Field
            name="Founder"
            component="input"
            type="text"
            placeholder="your github username"
          />
        </div>
        <div>
          <Field
            name="Name"
            component="input"
            type="text"
            placeholder="Name your idea!"
          />
        </div>
      </div>
      <div>
        <label>Link us to the Github repo!</label>
        <div>
          <Field
            name="GitHubURL"
            component="input"
            type="text"
            placeholder="https://github.com/UBCDUB/ideadate"
          />
        </div>
      </div>
      <div>
        <label>Provide a short pitch for your project!</label>
        <div>
          <Field name="Description" component="textarea" placeholder="Hacking anywhere with anybody!"/>
        </div>
      </div>
      {/* <div>
        <label>What technologies do you think you'll use?</label>
        <div>
          <Field name="projTech" component="textarea" placeholder="ex) python; Machine Learning;"/>
        </div>
      </div> */}
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