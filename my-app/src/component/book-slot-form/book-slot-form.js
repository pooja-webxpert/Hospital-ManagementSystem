"use client";
import React, { useState, useEffect } from "react";
import FormInput from "@/component/shared/form/formData";
import { Button, Container, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import { SlotBookFormValidation } from "../validation/slotBookFormValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { successMsg } from "../shared/form/Toastmsg/toaster";
import FormDatePicker from "../shared/form/datePicker";
import FormInputSelect from "../shared/form/FormInputSelect";
import { bloodGroupOptions, genderOptions } from "../doctors-list";

const BookSlot = ({ handleClose, doctorEmail }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(SlotBookFormValidation),
    defaultValues: {
      doctorEmail: doctorEmail,
      fName: "",
      lName: "",
      gender: "",
      date: "",
      age: "",
      mobile: "",
      fatherName: "",
      motherName: "",
      email: "",
      bloodGroup: "",
      maritalStatus: "",
    },
  });

  console.log("errors", errors); // To debug form errors

  const [slotData, setSlotData] = useState([]);

  // Load existing data from localStorage on component mount
  useEffect(() => {
    const storedSlotData = JSON.parse(localStorage.getItem("slotForm")) || [];
    setSlotData(storedSlotData);
  }, []);

  const onSubmit = (data) => {
    // Check for validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Form has errors:", errors);
      return;
    }

    // If form is valid, proceed to save the data
    const updatedSlotData = [...slotData, data];
    setSlotData(updatedSlotData);

    // Store updated array in localStorage
    localStorage.setItem("slotForm", JSON.stringify(updatedSlotData));
    successMsg("Slot is booked successfully.");

    // Close the modal and reset form
    handleClose();
    reset();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-heading">
          <Typography className="font-semibold" variant="h5">
          Book your appointment
          </Typography>
          <CloseIcon onClick={handleClose} className="text-end" />
        </div>
        <FormInput
          className="mt-10"
          control={control}
          name="doctorEmail"
          label="Doctor Email"
          errors={errors}
          defaultValue={doctorEmail || ""}
          InputProps={{ readOnly: true }}
        />
        <div className="!mt-10">
          <div className="form-fields">
            <FormInput
              className="mb-10"
              control={control}
              name="fName"
              label="First Name"
              errors={errors}
            />
            <FormInput
              className="mb-10"
              control={control}
              name="lName"
              label="Last Name"
              errors={errors}
            />
          </div>
          <div className="form-fields">
            <FormInputSelect
              className="mb-10 w-full"
              control={control}
              name="gender"
              label="Gender"
              options={genderOptions}
              errors={errors}
            />
            <FormDatePicker
              errors={errors}
              className="mb-10"
              control={control}
              name="date"
              label="Select Date"
            />
          </div>
          <div className="form-fields">
            <FormInput
              className="mb-10"
              control={control}
              inputType="number"
              name="age"
              label="Age"
              errors={errors}
            />
            <FormInput
              className="mb-10"
              control={control}
              name="mobile"
              inputType="tel"
              label="Mobile No."
              errors={errors}
            />
          </div>
          <div className="form-fields">
            <FormInput
              className="mb-10"
              control={control}
              name="fatherName"
              label="Father Name"
              errors={errors}
            />
            <FormInput
              className="mb-10"
              control={control}
              name="motherName"
              label="Mother Name"
              errors={errors}
            />
          </div>
          <div className="form-fields">
            <FormInput
              className="mb-10"
              control={control}
              name="email"
              label="Email"
              errors={errors}
            />
            <FormInputSelect
              className="mb-10"
              control={control}
              options={bloodGroupOptions} // Pass the gender options array
              name="bloodGroup"
              label="Blood Group"
              errors={errors}
            />
          </div>
            <FormInput
              className="mb-10"
              placeholder="Write Your Message Here..."
              control={control}
              name="message"
              label="Message"
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

export default BookSlot;
