import * as Yup from "yup";

// Validation for Patient History form
export const PatientHistoryValidation = Yup.object().shape({
  treatment: Yup.array().of(
    Yup.string().required("Select a treatment option.")
  ),
  medicine: Yup.array().of(
    Yup.string().required("Select the medicine.")
  ),
  startDate: Yup.array().of(
    Yup.string().required("Select the treatment start date.")
  ),
  endDate: Yup.array().of(
    Yup.string().required("Select the treatment end date.")
  ),
});
