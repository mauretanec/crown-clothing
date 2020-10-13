import React from 'react'
import './CustomButton.styles.scss'

const CustomButton = ({
  children,
  ...rest
}) => (
  <button className='custom-button' {...rest}>
    {children}
  </button>
)

export default CustomButton
