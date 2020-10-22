import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import './StripeButton.styles.scss'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51HeyWqCbGjfrth3Q1ha0mEYOUbqOSAAgEVXNEo1TwkXSqRRenYWnqVkGkVryvA7TrDPnoXErwbNo9uBzWrBcjnVW00ErdLe2uv'
  const onToken = token => {
    alert('Payment successful')
  }
  return (
    <StripeCheckout
      label='Pay now'
      name='Crown clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishableKey}
    >

    </StripeCheckout>
  )
}

export default StripeCheckoutButton
