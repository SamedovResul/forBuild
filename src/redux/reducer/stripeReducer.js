const reducer = (state = [],action) =>{
  switch (action.type) {
    case "PAYMENT_WITH_STRIPE":
      const payment = action.payload
      console.log(payment)
      return {...state, payment}
    default:
      return state
  }
}

export default reducer