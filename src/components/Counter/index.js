import {useFormik} from 'formik'

import './index.css'

const Counter = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    onSubmit: (values) => {
      console.log('fomik', values)
    },

    validate: (values) => {
      const errors = {}

      if (!values.name) {
        errors.name = 'Name Required*'
      }

      if (!values.email) {
        errors.email = 'Email Required*'
      }

      if (!values.password) {
        errors.password = 'Password Required*'
      }

      return errors
    },
  })
  console.log('formik', formik.values)

  return (
    <div className="counter-app">
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <label htmlFor="name" className="label-input">
          Name
        </label>
        <input
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          name="name"
          id="name"
          className="input-feild"
        />
        {formik.errors.name ? (
          <p className="error-msg">{formik.errors.name}</p>
        ) : null}

        <label htmlFor="email" className="label-input">
          Email
        </label>
        <input
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          id="email"
          className="input-feild"
        />
        {formik.errors.email ? (
          <p className="error-msg">{formik.errors.email}</p>
        ) : null}

        <label htmlFor="password" className="label-input">
          Password
        </label>
        <input
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          id="password"
          className="input-feild"
        />
        {formik.errors.password ? (
          <p className="error-msg">{formik.errors.password}</p>
        ) : null}
        <br />

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Counter
