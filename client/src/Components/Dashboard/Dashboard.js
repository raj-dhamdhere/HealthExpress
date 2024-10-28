import React from "react";
import SidebarComponent from "../Sidebar.js";
import NavbarComponent from "./DashboardNavbar.js";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <SidebarComponent />
        </Col>
        <Col md={10}>
          <NavbarComponent />

          {/* Add padding top for the cards container */}
          <div style={{ paddingTop: "15px" }}>
            <Row className="g-4">
              {" "}
              {/* Use g-4 for spacing between cards */}
              <Col md={4}>
                {" "}
                {/* Each card takes up 4 columns (1/3 of row) */}
                <Card style={{ width: "100%" }}>
                  <Card.Img
                    variant="top"
                    src="assets/img/portfolio/doctorsdemographic.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Demographic Details</Card.Title>
                    <Card.Text>
                      Effortlessly capture and manage user demographic data with
                      a streamlined, user-friendly interface.
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => {
                        window.open("/demographicdetails", "_self");
                      }}
                    >
                      Demographic Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card style={{ width: "100%" }}>
                  <Card.Img
                    variant="top"
                    src="assets/img/portfolio/doctorsscheduleappointment.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Schedule Appointment</Card.Title>
                    <Card.Text>
                      Easily schedule appointments with a seamless, intuitive
                      booking experience for all users.
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => {
                        window.open("/appointmentscheduling", "_self");
                      }}
                    >
                      Schedule Appointment
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card style={{ width: "100%" }}>
                  <Card.Img
                    variant="top"
                    src="assets/img/portfolio/doctorssummary.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Summary</Card.Title>
                    <Card.Text>
                      Quickly view comprehensive summaries with an organized,
                      user-friendly dashboard for all users.
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => {
                        window.open("/summarydetails", "_self");
                      }}
                    >
                      Summary Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
