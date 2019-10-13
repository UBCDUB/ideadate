import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'

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
            placeholder="githubID"
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
          <FieldArray name="Techstack" component={renderTech} />
        </div>
        <div>
          <Field name="Techstack" component="textarea" placeholder="ex) html/css; React; MongoDB;"/>
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

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderTech = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>
        Add Hobby
      </button>
    </li>
    {fields.map((tech, index) => (
      <li key={index}>
        {/* <button
          type="button"
          title="Remove techstack"
          onClick={() => fields.remove(index)}
        /> */}
        <Field
          name={tech}
          type="text"
          component={renderField}
          label={`tech #${index + 1}`}
        />
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
)

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(userForm)