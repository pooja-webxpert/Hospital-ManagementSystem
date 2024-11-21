"use client";
import PatientDetailsTabs from "@/component/tabs/tabs";
import UserContext from "@/context/UserContext";
import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";

export default function PatientDetailsPage() {
  const { selectedPatient, setSelectedPatient } = useContext(UserContext);

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("selectedPatient"));
    setSelectedPatient(getData);
  }, []);

  return (
    <div>
      <Typography variant="h4">
        Patient Details of {selectedPatient?.fName} {selectedPatient?.lName}
      </Typography>
      <PatientDetailsTabs patientData={selectedPatient} />
    </div>
  );
}
