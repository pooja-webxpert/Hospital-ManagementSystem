"use client";
import React, { useState, useEffect } from "react";
import FormInput from "@/component/shared/form/formData";
import { Button, Container, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { successMsg } from "../shared/form/Toastmsg/toaster";
import { AcceptAppointmentValidation } from "../validation/acceptAppointValidation";

const AcceptAppointmentForm = ({ handleClose, patientData }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(AcceptAppointmentValidation),
    defaultValues: {
      fName: patientData?.fName,
      lName: patientData?.lName,
      medicine:""
    },
  });

  const [slotData, setSlotData] = useState([]);

  // Load existing data from localStorage on component mount
  useEffect(() => {
    const storedSlotData = JSON.parse(localStorage.getItem("slotForm")) || [];
    setSlotData(storedSlotData);
  }, []);

  const onSubmit = (data) => {
  console.log("data",data)
    successMsg("Appointment is accepted.");
    handleClose();
    reset();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Typography variant="h6" mb={2}>
            Accept Appointment for {patientData?.fName} {patientData?.lName}
          </Typography>
          <div className="form-fields">
            <FormInput
              className="doctor-email"
              control={control}
              name="fName"
              label="First Name"
              errors={errors}
              defaultValue={patientData?.fName}
              InputProps={{ readOnly: true }}
            />
            <FormInput
              className="doctor-email"
              control={control}
              name="lName"
              label="Last Name"
              errors={errors}
              defaultValue={patientData?.lName}
              InputProps={{ readOnly: true }}
            />
          </div>
          <FormInput
            className="message"
            placeholder="Write Medicine Here..."
            control={control}
            name="medicine"
            label="Medicine"
            errors={errors}
          />
        </div>
        <Button type="submit" className="book-slot">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AcceptAppointmentForm;
