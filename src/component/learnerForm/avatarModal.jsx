import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

const AvataraModal = ({ Avataropen, AvatarhandleOpenClose,Avatars,setImg,setkidsData,kisdData }) => {
  
  return (
    <div>
      <Modal
        open={Avataropen}
        onClose={AvatarhandleOpenClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="Avatar-Box">
          <Button onClick={AvatarhandleOpenClose} > X </Button>
          <Typography>Select avatar</Typography>
          {
            Avatars.map((data,i) =>{
              const {img} = data
              return(
                <img  key={i} src={img} alt="metatesk" 
                onClick={() => {
                  setImg(img)
                  setkidsData({
                    ...kisdData,
                    avatar:img
                  })
                  AvatarhandleOpenClose()
                }} />
              )
            })
          }
        </Box>
      </Modal>
    </div>
  );
};

export default AvataraModal;
