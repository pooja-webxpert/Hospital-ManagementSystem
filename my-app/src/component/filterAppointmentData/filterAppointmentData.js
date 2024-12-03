import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import FormDatePicker from "../shared/form/datePicker";
import dayjs from "dayjs";

const FilterAppointmentData = ({ localData, onFilterDate }) => {
  const { control, watch, setValue } = useForm({
    defaultValues: {
      startDate: "",
      endDate: "",
    },
  });

  useEffect(() => {
    setValue("startDate", dayjs().format("MM/DD/YYYY"));
    // setValue("endDate", dayjs().format("MM/DD/YYYY"));
  }, [setValue]);

  const selectedStartDate = watch("startDate");
  const selectedEndDate = watch("endDate");

  // current date show then filtered data
  // useEffect(() => {
  //   if (selectedDate) {
  //     const filteredDateData = localData.filter((data) => {
  //       const formattedDataDate = dayjs(data.date).format("MM/DD/YYYY");
  //       return formattedDataDate === selectedDate;
  //     });
  //     onFilterDate(filteredDateData);
  //   }
  // }, [selectedDate, localData]);

  console.log("localData", localData);

  // const handleSearchDate = () => {
  //   const start = dayjs(selectedStartDate);
  //   const end = dayjs(selectedEndDate);

  //   const filteredDateData = localData.filter((data) => {
  //     const appointmentDate = dayjs(data.date);
  //     return appointmentDate.isBetween(start, end, "day", "[]");
  //   });
  //   onFilterDate(filteredDateData);
  // };
  const handleSearchDate = () => {
    const filteredDateData = localData.filter((data) => {
      const formattedDataDate = dayjs(data.date).format("MM/DD/YYYY");
      console.log("formattedDataDate", formattedDataDate);
      return formattedDataDate >= selectedStartDate && formattedDataDate <= selectedEndDate;
    });
    console.log("filteredDateData", filteredDateData);
    onFilterDate(filteredDateData);
  };

  return (
    <div className="form-fields items-center">
      <FormDatePicker
        control={control}
        label="Select Start Date"
        name="startDate"
      />
      <FormDatePicker
        control={control}
        label="Select End Date"
        name="endDate"
      />
      <Button onClick={handleSearchDate} className="items-center search-date">
        Search
      </Button>
    </div>
  );
};

export default FilterAppointmentData;
