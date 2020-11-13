import React from 'react'
// import { CustomButtonContainer } from './CustomButton.styles'
import './CustomButton.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, inverted }, ...rest ) => (
  <button
    className={`custom-button ${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''}`}
    {...rest}
  >
    {children}
  </button>
)

export default CustomButton
