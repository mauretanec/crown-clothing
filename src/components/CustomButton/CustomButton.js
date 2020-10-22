import React from 'react'
import { CustomButtonContainer } from './CustomButton.styles'

const CustomButton = ({ children }, ...rest ) => (
  <CustomButtonContainer
    {...rest}
  >
    {children}
  </CustomButtonContainer>
)

export default CustomButton
