import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

 const  ModalContainer = ({open,handleClose}) => {


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='Modal-Box' >
          <Typography>Create Account</Typography>
          <label htmlFor="name">
            full name
            <input required  id='name' type="text"  />
          </label>
          
          <label htmlFor="email">
            Adult Email
            <input required  id='email' type="text"  />
          </label>

          <label htmlFor="Password">
            Password
            <input required  id='Password' type="text"  />
          </label>
          <button> Join Metatesk </button>
          <p> Already have an account? <a href="#"> Log in </a> </p>
        </Box>
      </Modal>
    </div>
  );
}

export default  ModalContainer