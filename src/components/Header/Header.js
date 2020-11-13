import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCartHidden } from '../../redux/cart/selectors'
import { selectCurrentUser } from '../../redux/user/selectors'
import { signOutStart } from '../../redux/user/actions'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLinkContainer
} from './Header.styles'

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLinkContainer to='/shop'>
        SHOP
      </OptionLinkContainer>
      <OptionLinkContainer to='/contact'>
        CONTACT
      </OptionLinkContainer>
      {
        currentUser
        ? (
          <OptionLinkContainer as='div' onClick={signOutStart}>
            SIGN OUT
          </OptionLinkContainer>
        ) : (
        <OptionLinkContainer to='/signIn'>
          SIGN IN
        </OptionLinkContainer>
        )
      }
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? null : <CartDropdown />
    }
  </HeaderContainer>
)

export default compose(
  connect(createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectIsCartHidden
  }), dispatch => ({
    signOutStart: () => dispatch(signOutStart())
  }))
)(Header)
