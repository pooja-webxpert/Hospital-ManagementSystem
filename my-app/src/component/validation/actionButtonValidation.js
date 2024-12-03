import * as Yup from 'yup';

export const ActionButtonValidation = Yup.object().shape({
  action: Yup.string().required("Select action"),
});
