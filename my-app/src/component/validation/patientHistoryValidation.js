import * as Yup from "yup";

// Validation for Patient History form
export const PatientHistoryValidation = Yup.object().shape({
  treatment: Yup.string().required("Select Treatment"),
  medicine: Yup.string().required("Select Medicine"),
  startDate: Yup.string().required("Select Start Date"),
  endDate: Yup.string().required("Select End Date"),
});
