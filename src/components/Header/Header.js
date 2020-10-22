import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCartHidden } from '../../redux/cart/selectors'
import { selectCurrentUser } from '../../redux/user/selectors'
import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLinkContainer
} from './Header.styles'

const Header = ({ currentUser, hidden }) => (
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
          <OptionLinkContainer as='div' onClick={() => auth.signOut()}>
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
  }))
)(Header)
