import React, { useContext, useEffect } from "react";
import { Modal, Typography, Box, Button, Container } from "@mui/material";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import FormInput from "../shared/form/formData";
import FormInputSelect from "../shared/form/FormInputSelect";
import { ActionList } from "../doctors-list";
import UserContext from "@/context/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { ActionButtonValidation } from "../validation/actionButtonValidation";

const EditAppointment = ({ open, onClose, setEditAction }) => {
  const { selectedPatient, setSelectedPatient } = useContext(UserContext);
  const { control, handleSubmit, reset,formState:{errors} } = useForm({
    resolver: yupResolver(ActionButtonValidation),
    defaultValues: {
      doctorEmail: "",
      fName: "",
      lName: "",
      gender: "",
      age: "",
      mobile: "",
      action: "",
    },
  });

  useEffect(() => {
    if (selectedPatient) {
      reset({
        doctorEmail: selectedPatient.doctorEmail || "",
        fName: selectedPatient.fName || "",
        lName: selectedPatient.lName || "",
        gender: selectedPatient.gender || "",
        date: selectedPatient.date ? new Date(selectedPatient.date) : null,
        age: selectedPatient.age || "",
        mobile: selectedPatient.mobile || "",
        email: selectedPatient.email || "",
        bloodGroup: selectedPatient.bloodGroup || "",
        action: selectedPatient.action || "",
      });
    }
  }, [selectedPatient, reset]);

  if (!selectedPatient) {
    return null;
  }

  // submit data
  const onSubmit = (data) => {
    setEditAction(data); 
    setSelectedPatient((prev) => ({
      ...prev,
      action: data.action,
    }));
    onClose();
    reset();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="patient-details-modal"
    >
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
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-heading">
              <Typography className="font-semibold" variant="h5">
                Book your appointment
              </Typography>
              <CloseIcon onClick={onClose} className="text-end" />
            </div>
            <FormInput
              className="doctor-email"
              control={control}
              name="doctorEmail"
              label="Doctor Email"
              InputProps={{ readOnly: true }}
            />
            <div className="">
              <div className="form-fields">
                <FormInput
                  control={control}
                  name="fName"
                  label="First Name"
                  InputProps={{ readOnly: true }}
                />
                <FormInput
                  control={control}
                  name="lName"
                  label="Last Name"
                  InputProps={{ readOnly: true }}
                />
              </div>
              <div className="form-fields">
                <FormInput
                  control={control}
                  name="gender"
                  label="Gender"
                  // errors={errors}
                  InputProps={{ readOnly: true }}
                />
                <FormInput
                  control={control}
                  inputType="number"
                  name="age"
                  label="Age"
                  InputProps={{ readOnly: true }}
                  // errors={errors}
                />
              </div>
              <div className="form-fields">
                <FormInputSelect
                  control={control}
                  options={ActionList}
                  name="action"
                  label="Select Action"
                  errors={errors}
                />
                <FormInput
                  control={control}
                  name="mobile"
                  inputType="tel"
                  label="Mobile No."
                  InputProps={{ readOnly: true }}
                  // errors={errors}
                />
              </div>
            </div>
            <Button type="submit" className="book-slot">
              Submit
            </Button>
          </form>
        </Container>
        {/* <Button variant="contained" sx={{ mt: 2 ,marginLeft:3 }} onClick={onClose}>
          Close
        </Button> */}
      </Box>
    </Modal>
  );
};

export default EditAppointment;
