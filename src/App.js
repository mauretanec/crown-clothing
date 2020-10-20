import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/selectors'
import { setCurrentUser } from './redux/user/actions'
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import CheckoutPage from './pages/checkout/Checkout'
import Header from './components/Header/Header'
import SignInAndSignUpPage from './pages/signIn/SignInAndSignUpPage'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signIn'
            render={() => this.props.currentUser
              ? <Redirect to='/' />
              : <SignInAndSignUpPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default compose(
  connect(createStructuredSelector({
    currentUser: selectCurrentUser
  }), dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }))
)(App)
