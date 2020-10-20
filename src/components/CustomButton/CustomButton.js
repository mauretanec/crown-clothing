import React from 'react'
import './CustomButton.styles.scss'

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...rest
}) => (
  <button
    className={`
      ${inverted ? 'inverted' : ''}
      ${isGoogleSignIn ? 'google-sign-in' : ''}
      custom-button
    `}
    {...rest}
  >
    {children}
  </button>
)

export default CustomButton
