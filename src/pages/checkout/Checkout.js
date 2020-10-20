import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/selectors'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import './Checkout.styles.scss'

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
    }
    <div className='total'>
      <span>Total: ${total}</span>
    </div>
  </div>
)

export default compose(
  connect(createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
  }))
)(CheckoutPage)
