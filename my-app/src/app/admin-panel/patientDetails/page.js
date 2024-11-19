'use client'
import PatientDetailsTabs from "@/component/tabs/tabs";
import UserContext from "@/context/UserContext";
import { Typography } from "@mui/material";
import { useContext } from "react";

export default function PatientDetailsPage() {
    const { selectedPatient } = useContext(UserContext);

  return (
    <div>
        <Typography className="text-center" variant="h4">Patient Record</Typography>
      <PatientDetailsTabs patientData={selectedPatient}/>
    </div>
  );
}
