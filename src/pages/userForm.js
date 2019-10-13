import React from 'react'
import { Field, reduxForm } from 'redux-form'

const userForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>What's your name?</label>
        <div>
          <Field
            name="Name"
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
            name="Email"
            component="input"
            type="email"
            placeholder="Email"
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
        <label>Github Account</label>
        <div>
          <Field
            name="Github"
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
              name="Role"
              component="input"
              type="radio"
              value="designer"
            />{' '}
            Designer
          </label>
          <label>
            <Field
              name="Role"
              component="input"
              type="radio"
              value="frontend-dev"
            />{' '}
            Frontend Developer
          </label>
          <label>
            <Field
              name="Role"
              component="input"
              type="radio"
              value="backend-dev"
            />{' '}
            Backend Developer
          </label>
          <label>
            <Field
              name="Role"
              component="input"
              type="radio"
              value="project-manager"
            />{' '}
            Project Manager
          </label>
        </div>
      </div>
      <div>
        <label>Talk about yourself</label>
        <div>
          <Field name="Description" component="textarea" />
        </div>
      </div>
      <div>
        <label>What technology do you know?</label>
        <div>
          <Field name="TechStack" component="textarea" placeholder="ex) html/css; React; MongoDB;"/>
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