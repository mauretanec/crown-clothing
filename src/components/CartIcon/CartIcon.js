import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { toggleCartVisibility } from '../../redux/cart/actions'
import { selectCartItemsQuantity } from '../../redux/cart/selectors'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './CartIcon.styles.scss'

const CartIcon = ({ toggleCartVisibility, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartVisibility}>
    <ShoppingIcon className='shopping-icon' />
<span className='item-count'>{itemCount}</span>
  </div>
)

export default compose(
  connect(createStructuredSelector({
    itemCount: selectCartItemsQuantity
  }), {
    toggleCartVisibility
  })
  // connect(null, dispatch => ({
  //   toggleCartVisibility: () => dispatch(toggleCartVisibility())
  // }))
)(CartIcon)
