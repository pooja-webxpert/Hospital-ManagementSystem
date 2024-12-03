import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import FormDatePicker from "../shared/form/datePicker";
import dayjs from "dayjs";

const FilterAppointmentData = ({ localData, onFilterDate }) => {
  const { control, watch, setValue } = useForm({
    defaultValues: {
      "search-date": dayjs().format("MM/DD/YYYY"),
    },
  });

  useEffect(() => {
    setValue("search-date", dayjs().format("MM/DD/YYYY"));
  }, [setValue]);

  const selectedDate = watch("search-date");  // show date 

  // current date show then filtered data
  useEffect(() => {
    if (selectedDate) {
      const filteredDateData = localData.filter((data) => {
        const formattedDataDate = dayjs(data.date).format("MM/DD/YYYY");
        return formattedDataDate === selectedDate;
      });
      onFilterDate(filteredDateData);
    }
  }, [selectedDate, localData]);

  const handleSearchDate = () => {
    const filteredDateData = localData.filter((data) => {
      const formattedDataDate = dayjs(data.date).format("MM/DD/YYYY");
      return formattedDataDate === selectedDate;
    });
    onFilterDate(filteredDateData);
  };

  return (
    <div className="form-fields items-center">
      <FormDatePicker
        control={control}
        label="Select Date"
        name="search-date"
      />
      
      <Button onClick={handleSearchDate} className="items-center search-date">
        Search
      </Button>
    </div>
  );
};

export default FilterAppointmentData;
