"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import FilterAppointmentData from "@/component/filterAppointmentData/filterAppointmentData";
import { Typography } from "@mui/material";

const columns = [
  { field: "index", headerName: "ID", width: 30 }, 
  { field: "fName", headerName: "First name", width: 90 },
  { field: "lName", headerName: "Last name", width: 90 },
  { field: "gender", headerName: "Gender", width: 70 },
  { field: "date", headerName: "Date", width: 95 },
  { field: "age", headerName: "Age", width: 50 },
  { field: "message", headerName: "Message", width: 170 },
  { field: "mobile", headerName: "Mobile Number", width: 150 },
  { field: "fatherName", headerName: "Father name", width: 100 },
  { field: "bloodGroup", headerName: "Blood Group", width: 70 },
  { field: "email", headerName: "Email", width: 125 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function TableData({ open }) {

  const { data: session } = useSession();
  const [localData, setLocalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);


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
        date: booking.date, // Ensure you're using the correct format (YYYY-MM-DD)
      }));
      
      setLocalData(doctorBookingsWithIndex);
      setFilteredData(doctorBookingsWithIndex);
    }
  }, [session]); 
  
  const handleFilterDate=(filterDatadate)=>{
    setFilteredData(filterDatadate)
  }

  return (
    <>
    <Typography className="!mb-5" variant="h4">All Appointment</Typography>
    <FilterAppointmentData localData={localData} onFilterDate={handleFilterDate}/>
      <Paper
        sx={{
          marginTop:4,
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
          sx={{ border: 0 }}
        />
      </Paper>
    </>
  );
}
