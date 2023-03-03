import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  authLogin
} from "../../redux/action/action";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LoginModal = ({ open, handleClose }) => {
  let history = useHistory();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email:'',
    password:''
  });

  const onSubmit = (e) =>{
    e.preventDefault()
    dispatch(authLogin(data))
    Swal.fire({
      title: " successfull signed In ",
      color: "green",
      timer: 5000,
      timerProgressBar: true,
      position: "top",
      showConfirmButton: false,
    });
    setTimeout(() => {
      if(localStorage.getItem('profile')){
        console.log(true)
        history.push("/learner");
        handleClose()
      }
    }, 5000);
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="Modal-Box">
          <Typography>Login</Typography>
          <label htmlFor="">
            Email
          <input type="email" name='email' placeholder='Email' required onChange={(e) => setData({
                    ...data, email: e.target.value
                  })} />
          </label>
          <label htmlFor="">
            Password
          <input type="password" name="password" placeholder='password' required onChange={(e) => setData({
              ...data, password: e.target.value
            })} />
          </label>
          <button type='submit' onClick={(e) =>onSubmit(e)}> Login </button>
        </Box>
      </Modal>
    </div>
  )
}

export default LoginModal