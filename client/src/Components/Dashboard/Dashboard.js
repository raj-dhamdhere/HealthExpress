import React from "react";
import SidebarComponent from "../Sidebar.js";
import NavbarComponent from "./DashboardNavbar.js";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Swal from "sweetalert2";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Dashboard.css";

const API_URL = "http://localhost:3001";

const Dashboard = () => {
  const [storedUser, setStoredUser] = useState(null);
  const [mrn, setmrn] = useState();

  useEffect(() => {
    const storedUserdata = sessionStorage.getItem("user");
    if (storedUserdata) {
      const data = JSON.parse(storedUserdata);
      console.log(storedUser)
      setStoredUser(data);
      if (data.id) {
        setmrn(data.id);
      } else {
        console.error("ID is not available in stored user data.");
      }
    }
  }, [storedUser]);

  const onDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this appointment?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your appointment is safe.", "info");
      }
    });
  };

  const deleteData = async () => {
    const response = await axios.post(`${API_URL}/api/DeleteAllData`, {
      mrn: mrn,
    });

    console.log(response);

    if (response.data.success) {
      Swal.fire({
        icon: "success",
        title: "Deleted Account Successfully!",
        text: response.data.message,
        confirmButtonText: "OK",
      }).then(() => {
        sessionStorage.removeItem("user");
        window.open("/login", "_self");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Delete Failed",
        text: response.data.message,
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <SidebarComponent />
        </Col>
        <Col md={10}>
          <NavbarComponent />

          <div style={{ paddingTop: "15px" }}>
            <Row className="g-4">
              <Col md={2}></Col>
              <Col md={4}>
                <Card
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                    transition: "transform 0.3s",
                  }}
                  className="hover-card"
                >
                  <Card.Img
                    variant="top"
                    src="assets/img/portfolio/doctorsdemographic.jpg"
                    height="280px"
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
                <Card
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                    transition: "transform 0.3s",
                  }}
                  className="hover-card"
                >
                  <Card.Img
                    variant="top"
                    src="assets/img/portfolio/doctorsscheduleappointment.jpg"
                    height="280px"
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
            </Row>
            <Row className="g-4" style={{ paddingTop: "15px" }}>
              <Col md={2}></Col>
              <Col md={4}>
                <Card
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                    transition: "transform 0.3s",
                  }}
                  className="hover-card"
                >
                  <Card.Img
                    variant="top"
                    src="assets/img/portfolio/doctorssummary.jpg"
                    height="280px"
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
              <Col md={4}>
                <Card
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                    transition: "transform 0.3s",
                  }}
                  className="hover-card"
                >
                  <Card.Img
                    variant="top"
                    src="assets/img/portfolio/doctorno.jpg"
                    height="280px"
                  />
                  <Card.Body>
                    <Card.Title>Delete All Data</Card.Title>
                    <Card.Text>
                      This will delete all user data, demographic details, and
                      appointments scheduled via Health Express.
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => {
                        onDelete();
                      }}
                    >
                      Delete Account
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
