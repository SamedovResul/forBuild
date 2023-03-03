import { combineReducers } from "redux";
import auth from './reducer/reducer'
import stripe from './reducer/stripeReducer'


export default combineReducers({
  auth,
  stripe
})
