//FORMAT DATA TO CAPTURE AN ORDER WITH COMMERCE JS
export function formatCaptureData(formData){
    const data = {
        customer: {
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
        },
        shipping: {
          name: formData.firstname+" "+formData.lastname,
          street: formData.street,
          town_city: formData.town_city,
          county_state: 'VE-L', //Mérida
          postal_zip_code: formData.postal_zip_code,
          country: 'VE'
        },
        payment: {
            gateway: 'paypal',
            paypal: {
              action: 'authorize',
            },
          },
      }

      return data
}

export function formatExecuteData(formData, payment_id, payer_id){
    const data = {
        customer: {
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
        },
        shipping: {
          name: formData.firstname+" "+formData.lastname,
          street: formData.street,
          town_city: formData.town_city,
          county_state: 'VE-L', //Mérida
          postal_zip_code: formData.postal_zip_code,
          country: 'VE'
        },
        payment: {
          gateway: 'paypal',
          paypal: {
            action: 'capture',
            payment_id: payment_id,
            payer_id: payer_id,
          },
        },
      }

      return data
}


