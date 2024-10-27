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
      <Navbar style={{ backgroundColor: "#F2F0F0", color: "white" }} expand="lg">
        <Navbar.Brand href="/dashboard" style={{ color: "black" }}>
          HealthExpress
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto"></Nav>

          {/* Right aligned user info and logout */}
          <Nav className="align-items-center">
            <PeopleOutlinedIcon style={{ color: "black", marginRight: "8px" }} />
            {/* Render stored user name if available */}
            <span style={{ color: "black", marginRight: "15px" }}>
              {storedUser ? storedUser.name || "User" : "Loading..."}
            </span>

            {/* Logout button */}
            <Button variant="outline-danger" onClick={handleLogout}>
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
