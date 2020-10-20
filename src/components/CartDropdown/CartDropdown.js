import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { selectCartItems } from '../../redux/cart/selectors'
import { toggleCartVisibility } from '../../redux/cart/actions'
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem'
import './CartDropdown.styles.scss'

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length
        ? cartItems.map(cartItem =>
            <CartItem key={cartItem.id} item={cartItem} />
          )
        : <span className='empty-message'>Your cart is empty</span>
      }
    </div>
    <CustomButton onClick={() => {
      history.push('checkout')
      dispatch(toggleCartVisibility())
    }}>
        Go to checkout
    </CustomButton>
  </div>
)

export default compose(
  connect(createStructuredSelector({
    cartItems: selectCartItems
  })),
  withRouter
)(CartDropdown)
