import Api from '../api/api';
import Swal from 'sweetalert2'

  export const authRegistration = (userData) => async (dispatch) =>{

    try {
      const { data } = await Api.signUp(userData)
      // console.log(data)
      // navigate('/')
      dispatch({type:"SIGN_IN_UP", payload:data })
      // setIslogin(true)
    } catch (error) {
      Swal.fire({
        title: `${error.response.data.message}`,
        color:'red',
        timer: 4000,
        timerProgressBar: true,
        position:'top',
        showConfirmButton: false,
      })
    }
  }

  export const authLogin = (userData) => async (dispatch) =>{

    try {
      const { data } = await Api.signIn(userData)
      // navigate('/')
      dispatch({type:"SIGN_IN_UP", payload:data })
      // setIslogin(true)
    } catch (error) {
      console.log(error.response)
      Swal.fire({
        title: `${error.response.data.message}`,
        color:'red',
        timer: 4000,
        timerProgressBar: true,
        position:'top',
        showConfirmButton: false,
      })
    }
  }


  export const confirmation = (userData) => async (dispatch) =>{

    try {
      const { data } = await Api.confirmation(userData)
      dispatch({type:"CONFIRMATION", payload:data })
    } catch (error) {
      alert(error)
    }
  }

  export const ClearState = () => async (dispatch) =>{

    try {
      dispatch({type:"CLEAR"})
    } catch (error) {
      alert(error)
    }
  }

