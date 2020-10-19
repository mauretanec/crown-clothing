import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { toggleCartVisibility } from '../../redux/cart/actions'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './CartIcon.styles.scss'

const CartIcon = ({ toggleCartVisibility }) => (
  <div className='cart-icon' onClick={toggleCartVisibility}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
)

export default compose(
  connect(null, {
    toggleCartVisibility
  })
  // connect(null, dispatch => ({
  //   toggleCartVisibility: () => dispatch(toggleCartVisibility())
  // }))
)(CartIcon)
