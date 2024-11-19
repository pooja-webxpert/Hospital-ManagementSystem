import React from "react";
import { Modal, Typography, Box, Button } from "@mui/material";
import BookSlot from "@/component/book-slot-form/book-slot-form";

const EditAppointment = ({ open, onClose,  }) => {

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="patient-details-modal">
      <Box
        sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 900,
            maxHeight: "90vh",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            overflowY: "auto",
        }}
      >
        <BookSlot handleClose={onClose}/>
        <Button variant="contained" sx={{ mt: 2 ,marginLeft:3 }} onClick={onClose}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default EditAppointment;
