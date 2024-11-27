import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tooltip,
} from "@mui/material";
import { useForm } from "react-hook-form";
import FormInputSelect from "../shared/form/FormInputSelect";
import FormDatePicker from "../shared/form/datePicker";
import { Medicines, TreatmentDetails } from "../doctors-list";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import UserContext from "@/context/UserContext";

const PatientHistory = () => {
  const { selectedPatient } = useContext(UserContext);
  const { control, handleSubmit } = useForm();
  const [formRows, setFormRows] = useState([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

  // Fetch and initialize form rows from localStorage
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("formRows"));
    if (localData) {
      setFormRows(localData);
    } else {
      setFormRows([
        {
          id: Date.now(),
          data: { treatment: "", medicine: "", startDate: null, endDate: null },
          isEditing: true,
        },
      ]);
    }
  }, []);

  useEffect(() => {
    if (formRows.length > 0) {
      localStorage.setItem("formRows", JSON.stringify(formRows));
    }
  }, [formRows]);

  // Add new row
  const handleAdd = () => {
    const newId = Date.now();
    setFormRows((prev) => [
      ...prev,
      {
        id: newId,
        data: { treatment: "", medicine: "", startDate: null, endDate: null },
        isEditing: true,
      },
    ]);
  };

  // Open delete confirmation modal
  const handleOpenDeleteModal = (id) => {
    setSelectedRowId(id);
    setDeleteModalOpen(true);
  };

  // Close delete modal
  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedRowId(null);
  };

  // Confirm delete
  const handleConfirmDelete = () => {
    const updatedRows = formRows.filter((row) => row.id !== selectedRowId);
    setFormRows(updatedRows);
    handleCloseDeleteModal();
  };

  // Save a specific row
  const handleSaveRow = (index, formData) => {
    setFormRows((prevRows) =>
      prevRows.map((row, i) =>
        i === index
          ? {
              ...row,
              data: {
                treatment: formData.treatment || row.data.treatment,
                medicine: formData.medicine || row.data.medicine,
                startDate: formData.startDate || row.data.startDate,
                endDate: formData.endDate || row.data.endDate,
              },
              isEditing: false,
            }
          : row
      )
    );
  };

  // Edit row
  const handleEdit = (index) => {
    const updatedRows = [...formRows];
    updatedRows[index].isEditing = true;
    setFormRows(updatedRows);
  };

  return (
    <>
      <div className="mb-10">
        <Button onClick={handleAdd} variant="contained">
          Add {selectedPatient?.fName} {selectedPatient?.lName} Prescription
        </Button>
      </div>
      <table className="w-full" style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "25%" }}>Treatment</th>
            <th style={{ width: "25%" }}>Medicine</th>
            <th style={{ width: "15%" }}>Start Date</th>
            <th style={{ width: "15%" }}>End Date</th>
            <th style={{ width: "15%" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {formRows.map((row, index) => (
            <tr key={row.id}>
              <td>
                {row.isEditing ? (
                  <FormInputSelect
                    control={control}
                    label="Treatment"
                    options={TreatmentDetails}
                    name={`patientHistory[${index}].treatment`}
                  />
                ) : (
                  row.data.treatment
                )}
              </td>
              <td>
                {row.isEditing ? (
                  <FormInputSelect
                    control={control}
                    label="Medicines"
                    options={Medicines}
                    name={`patientHistory[${index}].medicine`}
                  />
                ) : (
                  row.data.medicine
                )}
              </td>
              <td>
                {row.isEditing ? (
                  <FormDatePicker
                  label="Start Date"
                    control={control}
                    name={`patientHistory[${index}].startDate`}
                  />
                ) : (
                  row.data.startDate
                )}
              </td>
              <td>
                {row.isEditing ? (
                  <FormDatePicker
                    control={control}
                    label="End Date"
                    name={`patientHistory[${index}].endDate`}
                  />
                ) : (
                  row.data.endDate
                )}
              </td>
              {index !== 0 ? (
                <td className="flex justify-center items-center gap-2">
                  {row.isEditing ? (
                    <Tooltip title="Save" placement="left-start">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit((formData) =>
                          handleSaveRow(index, formData.patientHistory[index])
                        )}
                      >
                        <SaveIcon />
                      </Button>
                    </Tooltip>
                  ) : (
                    <Tooltip title="Edit" placement="left-start">
                      <div
                        className="border rounded-full edit-icon"
                        onClick={() => handleEdit(index)}
                      >
                        <EditIcon />
                      </div>
                    </Tooltip>
                  )}
                  <Tooltip title="Delete" placement="right-start">
                    <div
                      className="rounded-full delete-icon"
                      onClick={() => handleOpenDeleteModal(row.id)}
                    >
                      <DeleteIcon />
                    </div>
                  </Tooltip>
                </td>
              ) : (
                <>
                 <td className="flex justify-center items-center gap-2">
                   {row.isEditing ? (
                    <Tooltip title="Save" placement="left-start">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit((formData) =>
                          
                          handleSaveRow(index, formData.patientHistory[index])
                        )}
                      >
                        <SaveIcon />
                      </Button>
                    </Tooltip>
                  ) : (
                    <Tooltip title="Edit" placement="left-start">
                      <div
                        className="border rounded-full edit-icon"
                        onClick={() => handleEdit(index)}
                      >
                        <EditIcon />
                      </div>
                    </Tooltip>
                    
                  )}
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

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
          <Button onClick={handleConfirmDelete} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PatientHistory;
