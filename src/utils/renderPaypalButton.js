export function renderPaypalButton(paypalAuth, captureOrderHandler, cancelOrder) {
    paypal.Button.render({
      env: 'sandbox', // Or 'sandbox',
      commit: true, // Show a 'Pay Now' button
      payment: function() {
        return paypalAuth.payment_id // The payment ID from earlier

      },
      onAuthorize: function(data, actions) {
        // Handler if customer DOES authorize payment (this is where you get the payment_id & payer_id you need to pass to Chec)
        captureOrder(data);
      },
      onCancel: function(data, actions) {
        // Handler if customer does not authorize payment
      }
    },
    '#paypal-button-container'
  );
}