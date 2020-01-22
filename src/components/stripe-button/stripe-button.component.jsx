import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_h1tLgR6VIKJ7lNQj21FsjmrY00EA3DMr7i';

  const onToken = token => {
   console.log(token);
   alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Banjo Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
