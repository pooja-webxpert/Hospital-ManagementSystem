import { FormControl, FormHelperText, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
import dayjs from "dayjs";

export default function FormDatePicker({
  name,
  control,
  label,
  errors,
  className,
  placeholder,
}) {
  return (
    <FormControl fullWidth error={!!errors?.[name]} className={className}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <DatePicker
              {...field}
              label={label}
              value={field.value ? dayjs(field.value, "DD/MM/YYYY") : null}
              placeholder={placeholder}
              onChange={(date) => {
                field.onChange(date ? date.format("DD/MM/YYYY") : null); // Ensure correct format
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={!!errors?.[name]} // The error prop will turn the field red
                  helperText={errors?.[name]?.message} // Show error message under the field
                />
              )}
            />
          )}
        />
      </LocalizationProvider>
    </FormControl>
  );
}
