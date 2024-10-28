import React from "react";
import SidebarComponent from "../Sidebar.js";
import NavbarComponent from "./DashboardNavbar.js";
import Summary from "./SummaryDetails.js";
import { Container, Row, Col } from "react-bootstrap"; // Import Bootstrap components

const SummaryPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <SidebarComponent />
        </Col>
        <Col md={10}>
          <NavbarComponent />
          <Summary />
        </Col>
      </Row>
    </Container>
  );
};

export default SummaryPage;