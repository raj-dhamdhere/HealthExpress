import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import { Button } from "react-bootstrap"; // Add Button for Logout
import { useNavigate } from 'react-router-dom';

export default function NavbarComponent() {
    const navigate = useNavigate();
  const userName = "John Doe";

  const handleLogout = () => {
    navigate('/login'); 
  };

  return (
    <>
      <Navbar style={{ backgroundColor: "#F2F0F0", color: "white" }} expand="lg">
        <Navbar.Brand href="/dashboard" style={{ color: "black" }}>
          HealthExpress
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            
          </Nav>

          {/* Right aligned user info and logout */}
          <Nav className="align-items-center">
            {/* User icon and name */}
            <PeopleOutlinedIcon style={{ color:"black",marginRight: "8px" }} />
            <span style={{ color:"black",marginRight: "15px" }}>{userName}</span>

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
