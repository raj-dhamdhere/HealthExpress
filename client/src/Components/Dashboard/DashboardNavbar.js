import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NavbarComponent() {
  const navigate = useNavigate();
  const [storedUser, setStoredUser] = useState(null);

  // Retrieve session storage data on component load
  useEffect(() => {
    const storedUserdata = sessionStorage.getItem("user");
    if (storedUserdata) {
      setStoredUser(JSON.parse(storedUserdata));
    }
  }, []); // Empty dependency array to run only on mount

  const handleLogout = () => {
    sessionStorage.removeItem("user"); // Clear user session on logout
    navigate("/login");
  };

  return (
    <>
      <Navbar
        style={{
          backgroundColor: "#F2F0F0",
          borderBottom: "2px solid #d1d1d1", // Border at the bottom
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
          padding: "4px 20px", // Reduced padding for smaller height
        }}
        expand="lg"
      >
        <Navbar.Brand
          href="/dashboard"
          style={{
            color: "black",
            fontWeight: "bold", // Making the brand name bold
            fontSize: "1.2rem", // Slightly smaller font size for brand name
          }}
        >
          Health<span style={{ color: "#FF6347" }}>Express</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto"></Nav>

          {/* Right aligned user info and logout */}
          <Nav className="align-items-center">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #d1d1d1", // Square border around user info
                borderRadius: "5px", // Small rounding for a slightly softened square
                padding: "6px 15px", // Reduced padding for a more compact user info box
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Shadow for the box
              }}
            >
              <PeopleOutlinedIcon style={{ color: "black", marginRight: "8px", fontSize: "1.3rem" }} />
              {/* Render stored user name if available */}
              <span style={{ color: "black", marginRight: "10px", fontSize: "1.1rem" }}>
                {storedUser ? storedUser.name || "User" : "Loading..."}
              </span>

              {/* Logout button */}
              <Button variant="outline-danger" onClick={handleLogout} size="sm" style={{ fontSize: "1.0rem" }}>
                Logout
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
