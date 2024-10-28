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
      let response = await axios.post(`${API_URL}/api/getUserData`, { id: mrn });
      console.log("Response data:", response.data.data);

      if (response.data && response.data.data) {
        setUserData([response.data.data]); // Wrap data in array for DataGrid
        setLoading(false);
      } else {
        console.error("User data is not available in the response.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };

  const columns = [
    { field: "fname", headerName: "First Name", width: 150 },
    { field: "lname", headerName: "Last Name", width: 150 },
    { field: "number", headerName: "Number", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "county", headerName: "County", width: 120 },
    { field: "pincode", headerName: "Pincode", width: 120 },
    { field: "pps", headerName: "PPS", width: 150 },
    { field: "address", headerName: "Address", width: 250 },
    { field: "insurancenumber", headerName: "Insurance Number", width: 200 },
  ];

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Summary
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
    </React.Fragment>
  );
}
