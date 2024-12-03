import React from "react";
import { Modal, Typography, Box, Button } from "@mui/material";

const PatientDetailsModal = ({ open, onClose, patientData }) => {
  if (!patientData) return null; // Ensure there's data before rendering

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="patient-details-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width:600,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="patient-details-modal" variant="h5">
        <strong>Patient Details</strong>  
        </Typography>
        <Typography><strong>Name:</strong> {patientData?.fName} {patientData?.lName}</Typography>
        <Typography><strong>Gender:</strong> {patientData?.gender}</Typography>
        <Typography><strong>Date of Appointment:</strong> {patientData?.date}</Typography>
        <Typography><strong>Age:</strong> {patientData?.age}</Typography>
        <Typography><strong>Mobile:</strong> {patientData?.mobile}</Typography>
        <Typography><strong>Father's Name:</strong> {patientData?.fatherName}</Typography>
        <Typography><strong>Blood Group:</strong> {patientData?.bloodGroup}</Typography>
        <Typography><strong>Email:</strong> {patientData?.email}</Typography>
        <Typography><strong>Patient Description:</strong> {patientData?.patientDescription}</Typography>
        <Button variant="contained" sx={{ mt: 2 }} onClick={onClose}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default PatientDetailsModal;
