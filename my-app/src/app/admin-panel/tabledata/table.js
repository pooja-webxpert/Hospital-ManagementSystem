"use client";
import React, { useState, useEffect, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper, Tooltip, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import FilterAppointmentData from "@/component/filterAppointmentData/filterAppointmentData";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import PatientDetailsModal from "@/component/modals/patientDetailsModal";
import EditAppointment from "@/component/modals/editAppointmentModal";
import AcceptAppointmentModal from "@/component/modals/acceptAppoitmentModal";
import { routesUrl } from "@/utils/pagesurl";
import { useRouter } from "next/navigation";
import UserContext from "@/context/UserContext";


export default function TableData({ open }) {
  const { selectedPatient,setSelectedPatient } = useContext(UserContext);
  
  const { data: session } = useSession();
  const [localData, setLocalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);

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

  const handleActionClick = (patientData, action) => {
    console.log(`Action: ${action}`, patientData);
    setSelectedPatient({ ...patientData, action });
    setIsModalOpen(false); // Close the modal on action click
  };

  const handleRowClick = (params) => {
    setSelectedPatient(params.row); // Set the selected patient's data
    setIsModalOpen(true); // Open the modal
  };

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };
 const router=useRouter();

  const columns = [
    { field: "index", headerName: "ID", width: 30 },
    { field: "fName", headerName: "First name", width: 90 },
    { field: "gender", headerName: "Gender", width: 70 },
    { field: "date", headerName: "Date", width: 95 },
    { field: "age", headerName: "Age", width: 50 },
    {
      field: "patientDescription",
      headerName: "Patient Description",
      width: 175,
      renderCell: (params) => (
        <div
          className="patient-descri"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setSelectedPatient(params.row); // Set the selected patient's data
           router.push(routesUrl.patientDetails) 
          }}
        >
          {params.row.patientDescription}
        </div>
      ),
    },
    { field: "mobile", headerName: "Mobile Number", width: 150 },
    { field: "bloodGroup", headerName: "Blood Group", width: 70 },
    { field: "email", headerName: "Email", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <>
          <Tooltip title="Accept">
            <CheckCircleOutlineIcon
              style={{
                width: "40px",
                height: "35px",
                color: "rgb(68 68 68)",
                border: "1px solid rgb(25 184 51)",
                borderRadius: "4px",
                padding: "5px 10px",
                marginRight: "5px",
                cursor: "pointer",
              }}
              className="action-icon"
              onClick={() => {
                setSelectedPatient(params.row); // Set the selected patient's data
                setIsAcceptModalOpen(true); // Open the modal
              }}
            />
          </Tooltip>
          <Tooltip title="Reject">
            <CancelOutlinedIcon
              style={{
                width: "40px",
                height: "35px",
                color: "rgb(68 68 68)",
                border: "1px solid #ec4747",
                borderRadius: "4px",
                padding: "5px 10px",
                marginRight: "5px",
                cursor: "pointer",
              }}
              className="cancel-icon"
              onClick={() => handleActionClick(params.row, "cancel")}
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
              className="action-icon"
              onClick={handleEdit}
            />
          </Tooltip>
        </>
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

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
          pageSizeOptions={[5, 10]}
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
      <EditAppointment
        open={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        // patientData={selectedPatient}
      />
      <AcceptAppointmentModal
        open={isAcceptModalOpen}
        onClose={() => setIsAcceptModalOpen(false)}
        patientData={selectedPatient}
      />
    </>
  );
}
