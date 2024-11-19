import React from "react";
import FormInput from "../shared/form/formData";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import BasicDatePicker from "../shared/form/datePicker";
import FormDatePicker from "../shared/form/datePicker";

const FilterAppointmentData = ({ localData,onFilterDate }) => {
  const { control, watch } = useForm({
    defaultValues: {
        "search-date": "",
    },
  });
  const selectedDate = watch("search-date");
  const handleSearchDate = () => {
    const filteredDateData = localData.filter(
      (data) =>{ 
       return data.date === selectedDate}
    );
    onFilterDate(filteredDateData)
  };

  return (
    <>
      <div className="form-fields items-center">
        <FormDatePicker control={control} label="Select Date" name="search-date"/>
        <Button onClick={handleSearchDate} className="items-center search-date ">
          Search
        </Button>
      </div>
    </>
  );
};

export default FilterAppointmentData;
