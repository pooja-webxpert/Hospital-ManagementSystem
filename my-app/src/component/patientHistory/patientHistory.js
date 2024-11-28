import React, { useContext, useState } from "react";
import {
  Button,
  Tooltip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useForm } from "react-hook-form";
import FormInputSelect from "../shared/form/FormInputSelect";
import FormDatePicker from "../shared/form/datePicker";
import { Medicines, TreatmentDetails } from "../doctors-list";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import UserContext from "@/context/UserContext";
import useLocalStorage from "use-local-storage";
import { PatientHistoryValidation } from "../validation/patientHistoryValidation";
import { yupResolver } from "@hookform/resolvers/yup";

const PatientHistory = () => {
  const { selectedPatient } = useContext(UserContext);
  const { control, handleSubmit, setValue, reset ,formState: { errors },} = useForm({
    resolver: yupResolver(PatientHistoryValidation),
    defaultValues: {
      treatment: "",
      medicine: "",
      startDate: "",
      endDate: "",
    },
  });

  const [formRows, setFormRows] = useLocalStorage("formRows", [
    {
      id: Date.now(),
      treatment: "",
      medicine: "",
      startDate: null,
      endDate: null,
      isEditing: true, // Initially editing
    },
  ]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

  const handleAdd = () => {
    const newId = Date.now();
    setFormRows((prev) => [
      ...prev,
      {
        id: newId,
        treatment: "",
        medicine: "",
        startDate: null,
        endDate: null,
        isEditing: true,
      },
    ]);
    reset();
  };

  const handleOpenDeleteModal = (id) => {
    setSelectedRowId(id);
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedRowId(null);
  };

  const handleConfirmDelete = () => {
    const updatedRows = formRows.filter((row) => row.id !== selectedRowId);
    setFormRows(updatedRows);

    // If the rows are empty after deletion, add a new empty row
    if (updatedRows.length === 0) {
      const newId = Date.now();
      setFormRows([
        {
          id: newId,
          treatment: "",
          medicine: "",
          startDate: null,
          endDate: null,
          isEditing: true,
        },
      ]);
      reset();
    }

    handleCloseDeleteModal();
  };

  const handleSaveRow = (id, formData) => {
    setFormRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id
          ? {
              ...row,
              treatment: formData.treatment || row.treatment,
              medicine: formData.medicine || row.medicine,
              startDate: formData.startDate || row.startDate,
              endDate: formData.endDate || row.endDate,
              isEditing: false, // After saving, set to false (not editing)
            }
          : row
      )
    );
  };

  const handleEdit = (id) => {
    const updatedRows = [...formRows];
    const rowIndex = updatedRows.findIndex((row) => row.id === id);

    if (rowIndex !== -1) {
      updatedRows[rowIndex].isEditing = true; // Set row to edit mode
      setFormRows(updatedRows);

      const currentRow = updatedRows[rowIndex];
      setValue("treatment", currentRow.treatment);
      setValue("medicine", currentRow.medicine);
      setValue("startDate", currentRow.startDate);
      setValue("endDate", currentRow.endDate);
    }
  };

  const columns = [
    {
      className:"headerName",
      field: "treatment",
      headerName: "Treatment",
      width: 270,
      renderCell: (params) =>
        params.row.isEditing ? (
          <FormInputSelect
          errors={errors}
            control={control}
            label="Treatment"
            options={TreatmentDetails}
            name={`treatment`}
            className="custom-input"
          />
        ) : (
          params.row.treatment
        ),
    },
    {
      field: "medicine",
      headerName: "Medicine",
      width: 250,
      renderCell: (params) =>
        params.row.isEditing ? (
          <FormInputSelect
          errors={errors}

            control={control}
            label="Medicine"
            options={Medicines}
            name={`medicine`}
            className="custom-input"
          />
        ) : (
          params.row.medicine
        ),
    },
    {
      field: "startDate",
      headerName: "Start Date",
      width: 180,
      renderCell: (params) =>
        params.row.isEditing ? (
          <FormDatePicker
            control={control}
          errors={errors}
            label="Start Date"
            name={`startDate`}
            className="custom-input"
          />
        ) : (
          params.row.startDate
        ),
    },
    {
      field: "endDate",
      headerName: "End Date",
      width: 170,
      renderCell: (params) =>
        params.row.isEditing ? (
          <FormDatePicker
          errors={errors}
            control={control}
            label="End Date"
            name={`endDate`}
            className="custom-input"
          />
        ) : (
          params.row.endDate
        ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        // Check if the current row is the first row (index 0)
        const isFirstRow = params.row.id === formRows[0]?.id;

        return (
          <>
            {params.row.isEditing ? (
              <div className="flex gap-2">
                <Tooltip title="Save">
                  <Button
                    variant="contained"
                    className="edit-icon rounded-full"
                    onClick={handleSubmit((formData) =>
                      handleSaveRow(params.row.id, formData)
                    )}
                  >
                    <SaveIcon />
                  </Button>
                </Tooltip>
                {/* Show the delete icon only if it's not the first row is add */}
                {!isFirstRow && (
                  <Tooltip title="Delete">
                    <Button
                      variant="outlined"
                      className="delete-icon rounded-full"
                      onClick={() => handleOpenDeleteModal(params.row.id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </Tooltip>
                )}
              </div>
            ) : (
              <div className="flex gap-2">
                <Tooltip title="Edit">
                  <Button
                  className="edit-icon rounded-full"
                    variant="outlined"
                    onClick={() => handleEdit(params.row.id)}
                  >
                    <EditIcon />
                  </Button>
                </Tooltip>
                <Tooltip title="Delete">
                  <Button
                    variant="outlined"
                    className="delete-icon rounded-full"
                    onClick={() => handleOpenDeleteModal(params.row.id)}
                  >
                    <DeleteIcon />
                  </Button>
                </Tooltip>
              </div>
            )}
          </>
        );
      },
    },
  ];

  return (
    <>
      <Button className="add-row" onClick={handleAdd} variant="contained">
        Add {selectedPatient?.fName} {selectedPatient?.lName} Prescription
      </Button>
      <div style={{ height: 400, width: "100%", marginTop: "15px" }}>
      <DataGrid
  style={{
    margin: "10px",
    fontSize: "16px",
  }}
  rows={formRows}
  columns={columns}
  pageSize={5}
  disableSelectionOnClick
  getRowHeight={() => 80} // Adjust row height
  sx={{
    '& .MuiDataGrid-cell': {
      alignItems: 'center', // Align content vertically
    },
    '& .custom-input': {
      width: '100%', // Ensure inputs span the cell width
    },
    fontSize: '1rem', // Adjust font size for readability
  }}
/>

      </div>

      <Dialog open={deleteModalOpen} onClose={handleCloseDeleteModal}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this row?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteModal}>Cancel</Button>
          <Button onClick={handleConfirmDelete} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PatientHistory;
