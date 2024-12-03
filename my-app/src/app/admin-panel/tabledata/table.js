"use client";
import React, { useState, useEffect, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper, Tooltip, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import FilterAppointmentData from "@/component/filterAppointmentData/filterAppointmentData";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import PatientDetailsModal from "@/component/modals/patientDetailsModal";
import EditAppointment from "@/component/modals/editAppointmentModal";
import { routesUrl } from "@/utils/pagesurl";
import { useRouter } from "next/navigation";
import UserContext from "@/context/UserContext";
import PendingIcon from "@mui/icons-material/Pending";

export default function TableData() {
  const { selectedPatient, setSelectedPatient } = useContext(UserContext);
  const [editedRowId, setEditedRowId] = useState(null);
  const { data: session } = useSession();
  const [localData, setLocalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const paginationModel = { page: 0, pageSize: 10 };

  useEffect(() => {
    if (session) {
      const doctorEmail = session.user.email;
      const allBookings = JSON.parse(localStorage.getItem("slotForm")) || [];
      const doctorBookings = allBookings.filter(
        (booking) => booking.doctorEmail === doctorEmail
      );
      const doctorBookingsWithIndex = doctorBookings.map((booking, index) => ({
        ...booking,
        index: index + 1,
        date: booking.date,
      }));

      setLocalData(doctorBookingsWithIndex);
      setFilteredData(doctorBookingsWithIndex);
    }
  }, [session]);

  const handleFilterDate = (filterDataDate) => {
    setFilteredData(filterDataDate);
  };

  // edit row
  const handleEdit = (patientData) => {
    setEditedRowId(patientData.index);
    setSelectedPatient({ ...patientData });
    setIsEditModalOpen(true);
  };

  const handleEditAction = (data) => {
    const updatedData = localData.map((row) =>
      row.index === editedRowId ? { ...row, action: data.action } : row
    );
    setLocalData(updatedData);
    setFilteredData(updatedData);
    localStorage.setItem("slotForm", JSON.stringify(updatedData)); // Save updated data to localStorage
  };
  const router = useRouter();

  const columns = [
    { field: "index", headerName: "ID", width: 30 },
    { field: "fName", headerName: "First name", width: 90 },
    { field: "gender", headerName: "Gender", width: 70 },
    { field: "date", headerName: "Date", width: 95 },
    { field: "age", headerName: "Age", width: 50 },
    {
      field: "patientDescription",
      headerName: "Patient Description",
      width: 160,
      renderCell: (params) => (
        <div
          className="patient-descri"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setSelectedPatient(params.row); // Set the selected patient's data
            router.push(routesUrl.patientDetails);
          }}
        >
          {params.row.patientDescription}
        </div>
      ),
    },
    { field: "mobile", headerName: "Mobile Number", width: 150 },
    { field: "bloodGroup", headerName: "Blood Group", width: 70 },
    { field: "email", headerName: "Email", width: 140 },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        const isAccepted = params.row.action === "Accept";
        const isPending = params.row.action === "Pending";
        const isRowEditable = params.row.index === editedRowId;
        return (
          <>
            <Tooltip title="Accept">
              <CheckCircleOutlineIcon
                style={{
                  width: "40px",
                  height: "35px",
                  color: isAccepted ? "white" : "rgb(68 68 68)",
                  border: `1px solid ${isAccepted ? "green" : "rgb(25 184 51)"}`,
                  borderRadius: "4px",
                  padding: "5px 10px",
                  marginRight: "5px",
                  cursor: isRowEditable ? "pointer" : "not-allowed",
                  backgroundColor: isAccepted
                    ? "rgb(38, 133, 50)"
                    : "transparent",
                }}
              />
            </Tooltip>
            <Tooltip title="Pending">
              <PendingIcon
                style={{
                  width: "40px",
                  height: "35px",
                  color: isPending ? "white" : "rgb(68 68 68)",
                  border: `1px solid ${isPending ? "#ec4747" : "rgb(25 184 51)"}`,
                  borderRadius: "4px",
                  padding: "5px 10px",
                  marginRight: "5px",
                  cursor: isRowEditable ? "pointer" : "not-allowed",
                  backgroundColor: isPending ? "#ec4747" : "transparent",
                }}
              />
            </Tooltip>
            <Tooltip title="Edit">
              <EditCalendarOutlinedIcon
                style={{
                  width: "40px",
                  height: "35px",
                  color: "rgb(68 68 68)",
                  border: "1px solid rgb(25 184 51)",
                  borderRadius: "4px",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
                onClick={() => handleEdit(params.row)}
              />
            </Tooltip>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Typography className="!mb-5" variant="h4">
        All Appointment
      </Typography>
      <FilterAppointmentData
        localData={localData}
        onFilterDate={handleFilterDate}
      />
      <Paper
        sx={{
          marginTop: 4,
          height: 430,
          transition: "width 0.3s ease",
        }}
      >
        <DataGrid
          rows={filteredData}
          columns={columns}
          getRowId={(row) =>
            row.index || row.email || `${row.fName}-${row.lName}`
          }
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[10, 20]}
          sx={{
            border: 0,
            "& .MuiDataGrid-row:hover": {
              cursor: "pointer",
            },
          }}
        />
      </Paper>

      {/* Render Modal */}
      <PatientDetailsModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        patientData={selectedPatient}
      />
      {/* Edit appointment (accept and pending) */}
      <EditAppointment
        open={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        setEditAction={handleEditAction} // Pass the handler for editing
      />
    </>
  );
}
