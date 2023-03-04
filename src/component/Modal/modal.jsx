import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  authRegistration,
  confirmation,
  ClearState,
} from "../../redux/action/action";
import SendEmail from "../../Auth/email/Email";
import SendCode from "../../Auth/sendCode/SendCode";
import RegisterForm from "../../Auth/registerForm/registerForm";
import validator from "email-validator";
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

const ModalContainer = ({ open, handleClose }) => {
  let history = useHistory();
  const [confirm, setConfirm] = useState({
    email: "",
    userNumber: "",
  });
  const [data, setData] = useState({
    name: "",
    surname: "",
    id: "",
    password: "",
  });
  let [number, setnumber] = useState(60);
  const dispatch = useDispatch();
  const state = useSelector((confirm) => confirm.auth.confirm);
  useEffect(() => {
    if (number === 0 || state.message === "wrong password") {
      dispatch(ClearState());
      setnumber(30);
      setConfirm({
        email: "",
        userNumber: "",
      });
    }
  }, [number, state]);

  const onConfirm = (e) => {
    e.preventDefault();

    if (confirm.userNumber) {
      console.log(true);
      setConfirm({
        email: "",
      });
    }
    let { name, d, password } = data;
    if (state) {
      dispatch(confirmation(confirm));
    } else if (name && password) {
      if (validator.validate(confirm.email)) {
        dispatch(confirmation(confirm));
        Swal.fire({
          title: "insert confirmation code",
          text: `check ${confirm.email} email address for access code`,
          color: "gray",
          timer: 4000,
          timerProgressBar: true,
          position: "top",
          showConfirmButton: false,
        });
      } else {
        confirm.email
          ? Swal.fire({
              title: "please insert True Email adress",
              color: "red",
              timer: 4000,
              timerProgressBar: true,
              position: "top",
              showConfirmButton: false,
            })
          : Swal.fire({
              title: "please insert Email adress",
              color: "red",
              timer: 4000,
              timerProgressBar: true,
              position: "top",
              showConfirmButton: false,
            });
      }
    } else {
      Swal.fire({
        title: "please complete form",
        color: "gray",
        timer: 4000,
        timerProgressBar: true,
        position: "top",
        showConfirmButton: false,
      });
    }
  };

  // send form data
  useEffect(() => {
    if (data.id) {
      dispatch(authRegistration(data));
      handleClose()
      Swal.fire({
        title: " successfull signed up ",
        color: "green",
        timer: 5000,
        timerProgressBar: true,
        position: "top",
        showConfirmButton: false,
      });
      setTimeout(() => {
        if(localStorage.getItem('profile')){
          history.push("/learner");
          handleClose()
        }
      }, 5000);
    }
  }, [data.id]);
  
  useEffect(() => {
    state &&
      state.message.confirmationState === true &&
      Swal.fire({
        title: "your Email adress confirmed",
        color: "green",
        timer: 4000,
        timerProgressBar: true,
        position: "top",
        showConfirmButton: false,
      });
  }, [state]);

  console.log(state)
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="Modal-Box">
          <Typography>Create Account</Typography>
          <RegisterForm useEffects={{ data, setData }} />
          {!state ? (
            <SendEmail
              useEffects={{ confirm, setConfirm, number, setnumber }}
            />
          ) : state.message.confirmationState === false ? (
            <SendEmail
              useEffects={{ confirm, setConfirm, number, setnumber }}
            />
          ) : (
            <p> your email confirm </p>
          )}
          {state && state.message.confirmationState === false && (
            <SendCode useEffects={{ setConfirm, number, setnumber }} />
          )}
          <button
            onClick={(e) => onConfirm(e)}
            style={
              state
                ? state.message.confirmationState === true
                  ? { display: "none" }
                  : { backgroundColor: "blue" }
                : { backgroundColor: "blue" }
            }
            disabled={
              state
                ? state.message.confirmationState === true
                  ? true
                  : false
                : false
            }
          >
            {!state ? <span> send email </span> : <span> send code </span>}
          </button>

          {
            state && state.message.confirmationState === true && (
              <button 
              onClick={(e) => {
                e.preventDefault();
                setData({ ...data, id: state.message._id });
              }}
              style={
                state
                  ? state.message.confirmationState === true
                    ? { backgroundColor: "blue" }
                    : { backgroundColor: "buttonface" }
                  : { backgroundColor: "buttonface" }
              }
              >
                Join Metatesk
              </button>
            )
          }
          <p>
            {" "}
            Already have an account? <a href="#"> Log in </a>{" "}
          </p>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalContainer;
