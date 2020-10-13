import React from 'react';
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Header from './components/Header/Header'
import SignInAndSignUp from './pages/signIn/SignInAndSignUpPage'
import { Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signIn' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
