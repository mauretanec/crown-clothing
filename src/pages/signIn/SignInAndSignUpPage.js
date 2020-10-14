import React from 'react'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'
import './SignInAndSignUpPage.styles.scss'

const SignInAndSignUpPage = () =>  (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndSignUpPage
