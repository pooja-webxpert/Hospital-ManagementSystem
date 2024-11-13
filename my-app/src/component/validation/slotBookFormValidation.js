import * as Yup from 'yup';
import dayjs from 'dayjs';
import { department } from '../doctors-list';
import { Message } from '@mui/icons-material';

export const SlotBookFormValidation = Yup.object().shape({
  fName: Yup.string()
    .required("First Name is required")
    .min(2, "First Name must be at least 2 characters")
    .max(50, "First Name cannot exceed 50 characters"),
  lName: Yup.string()
    .required("Last Name is required")
    .min(2, "Last Name must be at least 2 characters")
    .max(50, "Last Name cannot exceed 50 characters"),
  gender: Yup.string().required("Gender is required"),
  date: Yup.string()
    .required("Date is required")
    .test("is-valid-date", "Date must be in DD/MM/YYYY format", (value) => {
      // Check if value exists and if it's a valid date in DD/MM/YYYY format
      return value ? dayjs(value, "DD/MM/YYYY", true).isValid() : false;
    }),
  age: Yup.number()
    .required("Age is required")
    .positive("Age must be a positive number")
    .integer("Age must be a whole number")
    .max(150, "Please enter a valid age"),
  mobile: Yup.string().required("Mobile number is required"),
  fatherName: Yup.string().required("Father's Name is required"),
  motherName: Yup.string().required("Mother's Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  bloodGroup: Yup.string().required("Blood Group is required"),
 message: Yup.string().required("Message is required"),
});
