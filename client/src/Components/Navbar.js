import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavbarComponent() {
  return (
    <>
      <Navbar
        style={{
          backgroundColor: "#F2F0F0",
          borderBottom: "2px solid #d1d1d1", // Border at the bottom
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
          padding: "5px 20px", // Reduced padding for smaller height
        }}
        expand="lg"
      >
        <Navbar.Brand
          href="#home"
          style={{
            color: "black",
            fontWeight: "bold", // Making the brand name bold
            fontSize: "1.3rem", // Slightly smaller font size for brand name
          }}
        >
          Health<span style={{ color: "#FF6347" }}>Express</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>

          {/* Right aligned nav links */}
          <Nav className="ml-auto">
            <Nav.Link href="/" style={{ color: "black", fontSize: "1.0rem" }}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" style={{ color: "black", fontSize: "1.0rem" }}>
              About Us
            </Nav.Link>
            <Nav.Link href="/register" style={{ color: "black", fontSize: "1.0rem" }}>
              Register
            </Nav.Link>
            <Nav.Link href="/login" style={{ color: "black", fontSize: "1.0rem" }}>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
