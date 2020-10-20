import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem'
import './CartDropdown.styles.scss'

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(cartItem =>
          <CartItem key={cartItem.id} item={cartItem} />
        )
      }
    </div>
    <CustomButton>Go to checkout</CustomButton>
  </div>
)

export default compose(
  connect(({ cart: { cartItems } }) => ({
    cartItems
  }))
)(CartDropdown)
