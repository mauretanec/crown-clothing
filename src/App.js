import React from 'react';
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Header from './components/Header/Header'
import SignInAndSignUp from './pages/signIn/SignInAndSignUpPage'
import { Switch, Route } from 'react-router-dom'
import { auth } from './firebase/firebase.utils'
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log('User: ', user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signIn' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
