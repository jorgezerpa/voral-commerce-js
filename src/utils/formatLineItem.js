//Format the line_items (products) to pass it on the checkout.capture function on commerce js

                                //cart.line_items
export const formatLineItems = (itemsArr) => {
    let line_items = {}
    itemsArr.forEach(item=>{
        line_items[item.id] = {
            quantity: 1
        }
    })
    return line_items
}