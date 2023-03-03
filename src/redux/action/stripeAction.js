import Api from '../api/api'

export const payment = (stripeData) => async (dispatch) =>{
  try {
    console.log(stripeData)
    const {data} = await Api.stripe(stripeData)
    console.log(data)
    dispatch({type:'PAYMENT_WITH_STRIPE',payload:data})
  } catch (error) {
    console.log(error)
  }
}