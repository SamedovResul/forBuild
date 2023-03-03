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

const TopicModal = ({
  TopichandleOpenClose,
  Topicopen,
  handleClick,
  topics,
}) => {
  return (
    <div>
      <Modal
        open={Topicopen}
        onClose={TopichandleOpenClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="topics-container topic-Box">
          <Button onClick={TopichandleOpenClose}> X </Button>
          <Typography>Popular Topics</Typography>
          {topics.map((data, i) => {
            const { name } = data;

            return (
              <div onClick={() => handleClick(i)} key={i} className="topic">
                <div
                  className="topic2"
                  style={{ display: topics[i].selected ? "block" : "none" }}
                >
                  <span>✓</span>
                </div>
                <div className={topics[i].selected ? "" : "gradient"}>
                  <p>{name}</p>
                </div>
              </div>
            );
          })}
        </Box>
      </Modal>
    </div>
  );
};

export default TopicModal;
