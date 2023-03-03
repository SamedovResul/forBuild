const reducer = (state = { authData: null, confirm: '' }, action) =>{
  switch (action.type) {
    case "SIGN_IN_UP":
      localStorage.setItem("profile", JSON.stringify(action.payload));
      return {...state, authData: action.payload}
    case "LOG_OUT":
      localStorage.clear()
      return {...state, authData: null}
    case "CONFIRMATION":
      return {...state, confirm: action.payload}
    case "CLEAR":
      localStorage.removeItem('profile')
      return {...state, authData: ""}
    default:
      return state
  }
}

export default reducer