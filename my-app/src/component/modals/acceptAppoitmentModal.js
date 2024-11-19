import React from "react";
import { Modal, Box, Button } from "@mui/material";
import AcceptAppointmentForm from "../acceptAppointmentForm/acceptAppointmentForm";

const AcceptAppointmentModal = ({ open, onClose,patientData  }) => {

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
        <AcceptAppointmentForm patientData={patientData} handleClose={onClose}/>
      </Box>
    </Modal>
  );
};

export default AcceptAppointmentModal;
