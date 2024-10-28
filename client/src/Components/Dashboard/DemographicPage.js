import React from "react";
import SidebarComponent from "../Sidebar.js";
import NavbarComponent from "./DashboardNavbar.js";
import RegisterComponent from "./DemographicRegistration.js";
import { Container, Row, Col } from "react-bootstrap"; // Import Bootstrap components

const DemographicPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <SidebarComponent />
        </Col>
        <Col md={10}>
          <NavbarComponent />
          <RegisterComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default DemographicPage;
