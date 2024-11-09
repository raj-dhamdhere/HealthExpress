import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import { CircularProgress, Typography, Box } from "@mui/material";
import "./SummaryStyles.css"; // Import your custom CSS styles here

const API_URL = "http://localhost:3001";

export default function Summary() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mrn, setMrn] = useState(null);
  const [storedUser, setStoredUser] = useState({});

  useEffect(() => {
    const storedUserData = sessionStorage.getItem("user");
    if (storedUserData) {
      const data = JSON.parse(storedUserData);
      setStoredUser(data);
      if (data.id) {
        setMrn(data.id);
      } else {
        console.error("ID is not available in stored user data.");
      }
    }
  }, []);

  useEffect(() => {
    if (mrn) {
      getUserData();
    }
  }, [mrn]);

  const getUserData = async () => {
    try {
      let response = await axios.post(`${API_URL}/api/getAppointmentSummary`, { mrn: mrn });
      console.log("Response data:", response.data.data);
  
      if (response.data && response.data.data) {
        // Extract the array of appointments
        const userAppointments = response.data.data;
  
        // Map over the appointments to ensure each one has a unique id
        const dataWithIds = userAppointments.map((appointment) => ({
          ...appointment,
          id: appointment._id, // Set _id as the unique id for each row
        }));
  
        // Set the data with ids to the state
        setUserData(dataWithIds);
        setLoading(false);
      } else {
        console.error("User data is not available in the response.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };
  

  const columns = [
    { field: "mrn", headerName: "MRN", width: 100 },
    { field: "appointmentNumber", headerName: "Appointment Number", width: 170 },
    { field: "appointmentDate", headerName: "Appointment Date", width: 150 },
    { field: "doctorContent", headerName: "Doctor Name", width: 200 },
    { field: "appointmentSlotContent", headerName: "Appointment Slot", width: 200 },
    { field: "refferedby", headerName: "Refferedby", width: 120 },
    { field: "symptoms", headerName: "Symptoms", width: 150 },
    { field: "allergies", headerName: "Allergies", width: 120 },
    { field: "reasonforA", headerName: "Reason for Appointment", width: 250 }
  ];

  return (
    <React.Fragment>
      <div style={{paddingTop:"20px"}}>

      <Typography variant="h4" gutterBottom>
      <h4>Appointment Summary</h4>
      </Typography>
      <Box className="dataGridContainer"> {/* Apply the custom class here */}
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CircularProgress />
          </Box>
        ) : (
          <DataGrid
            rows={userData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection
            components={{
              Toolbar: GridToolbar,
            }}
          />
        )}
      </Box>
      </div>
    </React.Fragment>
  );
}
