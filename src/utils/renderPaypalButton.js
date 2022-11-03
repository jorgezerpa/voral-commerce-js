export function renderPaypalButton(paypalAuth, captureOrder) {
  paypal.Button.render({
    env: 'sandbox', // Or 'production',
    commit: true, // Show a 'Pay Now' button
    payment: function() {
      return paypalAuth.payment_id // The payment ID from earlier

    },
    onAuthorize: function(data, actions) {
      // Handler if customer DOES authorize payment (this is where you get the payment_id & payer_id you need to pass to Chec)
      captureOrder(data);
    },
    onCancel: function(data, actions) {
      console.log('order canceled', data)
    }
  },
  '#paypal-button-container'
);
}