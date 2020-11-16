import React, { useState } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import { googleSignInStart, emailSignInStart } from '../../redux/user/actions'
import './SignIn.styles.scss'

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setCredentials] = useState({ email: '', password: '' })

  const { email, password } = userCredentials

  const handleSubmit = async event => {
    event.preventDefault()

    emailSignInStart(email, password)
  }

  const handleChange = event => {
    const { value, name } = event.target

    setCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={handleChange}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
        </div>
      </form>
    </div>
  )
}

export default compose(
  connect(null, dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
  }))
)(SignIn)
