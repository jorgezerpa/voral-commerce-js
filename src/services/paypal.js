import { executeOrder } from '../services/commerce'

async function captureOrder(data) {
    try {
      // Complete capturing the order.
      const order = executeOrder()
  
      // If we get here, the order has been successfully captured and the order detail is part of the `order` variable
      console.log(order);
      return;
    } catch (response) {
      // There was an issue capturing the order with Commerce.js
      console.log(response);
      alert(response.message);
      return;
    } finally {
      // Any loading state can be removed here.
    }
  }