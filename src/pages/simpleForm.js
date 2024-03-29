import React from 'react'
import { Field, reduxForm } from 'redux-form'

const userForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>UserID</label>
        <div>
          <Field
            name="userid"
            component="input"
            type="userid"
            placeholder="UserID"
          />
        </div>
      </div>
      <div>
        <label>Role</label>
        <div>
          <label>
            <Field
              name="role"
              component="input"
              type="radio"
              value="designer"
            />{' '}
            Designer
          </label>
          <label>
            <Field
              name="role"
              component="input"
              type="radio"
              value="frontend-dev"
            />{' '}
            Frontend Developer
          </label>
          <label>
            <Field
              name="role"
              component="input"
              type="radio"
              value="backend-dev"
            />{' '}
            Backend Developer
          </label>
          <label>
            <Field
              name="role"
              component="input"
              type="radio"
              value="project-manager"
            />{' '}
            Project Manager
          </label>
        </div>
      </div>
      <div>
        <label>About You</label>
        <div>
          <Field name="notes" component="textarea" />
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