import React from 'react'

import CustomButton from '../CustomButton/CustomButton';
import './CartDropdown.styles.scss'

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>Go to checkout</CustomButton>
  </div>
)

export default CartDropdown
