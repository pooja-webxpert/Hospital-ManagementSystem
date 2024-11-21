import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useForm } from "react-hook-form";
import FormInputSelect from "../shared/form/FormInputSelect";
import FormDatePicker from "../shared/form/datePicker";
import { Medicines, TreatmentDetails } from "../doctors-list";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const PatientHistory = () => {
  const { control, handleSubmit, setValue, reset } = useForm({
    defaultValues: {
      patientHistory: [],
    },
  });

  const [formRows, setFormRows] = useState([
    {
      id: 0,
      data: { treatment: "", medicine: "", startDate: null, endDate: null },
    },
  ]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);
  console.log("selectedRowId", selectedRowId);
  // Add a new form row
  const handleAdd = () => {
    setFormRows((prev) => [
      ...prev,
      {
        id: prev.length,
        data: {
          treatment: "",
          medicine: "",
          startDate: null,
          endDate: null,
        },
      },
    ]);
  };

  // Handle form submission
  const handleHistorySubmit = (data) => {
    setFormRows(data.patientHistory);
  };

  // Open confirmation modal
  const handleOpenDeleteModal = (index) => {
    setSelectedRowId(index);
    setDeleteModalOpen(true);
  };
  console.log("formRows", formRows);
  // Close confirmation modal
  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedRowId(null);
  };

  // Confirm delete row
  const handleConfirmDelete = () => {
    console.log("selectedRowIdDelete", selectedRowId);
    if (selectedRowId === 0) {
      alert("The first row cannot be deleted.");
      handleCloseDeleteModal();
      return;
    }
    const filterData =formRows.filter((_, index) => index !== selectedRowId);
    console.log("filterData",filterData)
    setFormRows(filterData);
    handleCloseDeleteModal();
  };

  const handleEdit = (id) => {
    const editRow = formRows.find((_, index) => index === id);
    console.log("editRow", editRow);
    if (editRow) {
      setValue(`patientHistory[${id}].treatment`, editRow.treatment);
      setValue(`patientHistory[${id}].medicine`, editRow.medicine);
      setValue(`patientHistory[${id}].startDate`, editRow.startDate);
      setValue(`patientHistory[${id}].endDate`, editRow.endDate);
    }
  };

  return (
    <>
      <div className="mb-10">
        <Button onClick={handleAdd} variant="contained">
          Add Row
        </Button>
      </div>
      <form onSubmit={handleSubmit(handleHistorySubmit)}>
        {formRows.map((row, index) => (
            <div
              key={index}
              className="form-fields"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <FormInputSelect
                control={control}
                label="Treatment"
                options={TreatmentDetails}
                name={`patientHistory[${index}].treatment`}
              />
              <FormInputSelect
                control={control}
                label="Medicine"
                options={Medicines}
                name={`patientHistory[${index}].medicine`}
              />
              <FormDatePicker
                control={control}
                name={`patientHistory[${index}].startDate`}
                label="Start Date"
              />
              <FormDatePicker
                control={control}
                name={`patientHistory[${index}].endDate`}
                label="End Date"
              />
              <div
                className="rounded-full delete-icon"
                onClick={() => handleOpenDeleteModal(index)}
                style={{ cursor: "pointer" }}
              >
                <DeleteIcon />
              </div>
              <div
                className="border rounded-full edit-icon"
                onClick={() => handleEdit(index)}
                style={{ cursor: "pointer" }}
              >
                <EditIcon />
              </div>
            </div>
          )
        )}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>

      {/* Delete Confirmation Modal */}
      <Dialog open={deleteModalOpen} onClose={handleCloseDeleteModal}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this row?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PatientHistory;
