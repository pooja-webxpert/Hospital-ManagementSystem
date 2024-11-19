import * as Yup from 'yup';

export const AcceptAppointmentValidation = Yup.object().shape({
  medicine: Yup.string().required("Medicine is required"),
});
