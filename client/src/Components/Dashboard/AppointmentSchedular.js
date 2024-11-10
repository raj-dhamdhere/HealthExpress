import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Checkbox } from "@mui/material";
import {
  LocalizationProvider,
  DateTimePicker,
  DatePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import Swal from "sweetalert2";
import "./AppointmentSchedular.css"; // Import your custom CSS styles here
const API_URL = "http://localhost:3001";

const Register = () => {
  const [mode, setMode] = useState("find"); // Track the current mode
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDateContent, setselectedDateContent] = useState(new Date());
  const [storedUser, setStoredUser] = useState(null);
  const [disabledstate, setdisabledstate] = useState(true);
  const [disabledstateSearch, setdisabledstateSearch] = useState(false);
  const [mrn, setmrn] = useState();
  const [doctor, setDoctor] = useState(); // for setting doctor field
  const [doctors, setDoctors] = useState([]); // setting doctor array which is getting prefetched
  const [slots, setSlots] = useState([]);
  const [appointmentSlot, setAppointmentSlot] = useState();
  const [doctorContent, setDoctorContent] = useState(); // for setting doctor content field
  const [slotsContent, setSlotsContent] = useState([]);
  const [appointmentSlotContent, setAppointmentSlotContent] = useState();
  const [refferedby, setrefferedby] = useState();
  const [symptoms, setsymptoms] = useState();
  const [allergies, setallergies] = useState();
  const [reasonforA, setreasonforA] = useState();
  const [appointmentnumber, setappointmentnumber] = useState();
  const buttonStyle = {
    width: "100px", // Set the desired width
    height: "40px", // Set the desired height
    margin: "0 10px", // Margin to space out the buttons
  };

  // Function to reset all fields
  const resetFields = () => {
    setSelectedDate(new Date());
    setDoctor("");
    setSlots([]);
    setselectedDateContent(new Date());
    setDoctorContent("");
    setAppointmentSlotContent("");
    setrefferedby("");
    setsymptoms("");
    setallergies("");
    setreasonforA("");
  };

  const resetFieldsSearch = () => {
    // setSelectedDate(new Date());
    // setDoctor("");
    // setSlots([]);
    setselectedDateContent(new Date());
    setDoctorContent("");
    setAppointmentSlotContent("");
    setrefferedby("");
    setsymptoms("");
    setallergies("");
    setreasonforA("");
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleDateChangeContent = (newDate) => {
    setselectedDateContent(newDate);
  };

  const handleDoctorChange = async (selectedDoctor) => {
    setDoctor(selectedDoctor);
    if (selectedDoctor) {
      const fetchedSlots = await getAppointmentSlots(selectedDoctor); // Fetch slots based on selected doctor
      setSlots(fetchedSlots);
    } else {
      setSlots([]); // Reset slots if no doctor is selected
    }
  };

  const handleDoctorChangeContent = async (selectedDoctor) => {
    setDoctorContent(selectedDoctor);
    if (selectedDoctor) {
      const fetchedSlots = await getAppointmentSlots(selectedDoctor); // Fetch slots based on selected doctor
      setSlotsContent(fetchedSlots);
    } else {
      setSlotsContent([]); // Reset slots if no doctor is selected
    }
  };

  useEffect(() => {
    const storedUserdata = sessionStorage.getItem("user");
    if (storedUserdata) {
      const data = JSON.parse(storedUserdata);
      setStoredUser(data);
      // Set mrn if it exists
      if (data.id) {
        setmrn(data.id);
      } else {
        console.error("ID is not available in stored user data.");
      }
    }
  }, []); // Empty dependency array to run only on mount

  useEffect(() => {
    getAllDoctorsData();
  }, []);

  const handleModeChange = (newMode) => {
    setMode(newMode);
    if (newMode === "add") {
      resetFields(); // Clear fields in add mode
      setdisabledstateSearch(true);
      setdisabledstate(false);
    } else if (newMode === "find") {
      resetFields(); // Optionally reset fields in find mode
      setdisabledstateSearch(false);
      setdisabledstate(true);
      // Fetch logic can be added here if necessary
    }
    // Other modes don't need to clear fields
  };

  const onAdd = () => {
    setMode("add");
    handleModeChange("add");
  };

  const onAbort = () => {
    setMode("find");
    handleModeChange("find");
  };

  const onDelete = async () => {
    if (doctorContent === undefined) {
      Swal.fire({
        icon: "error",
        title: "No Data Selected",
        text: "Please Search/Select the Data First",
        confirmButtonText: "OK",
      });
    } else {
      // Display confirmation popup for deletion
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
          // User canceled deletion
          Swal.fire("Cancelled", "Your appointment is safe.", "info");
        }
      });
    }
  };

  const onEdit = () => {
    if (doctorContent === undefined) {
      Swal.fire({
        icon: "error",
        title: "No Data Selected",
        text: "Please Search/Select the Data First",
        confirmButtonText: "OK",
      });
    } else {
      setMode("edit");
      setdisabledstateSearch(true);
      setdisabledstate(false);
    }
  };

  const onSearch = () => {
    resetFieldsSearch(); // Optionally reset fields in find mode
    getAppointmentData();
  };
 
  const deleteData = async () => {
    // delete logic
    const formattedDate = selectedDateContent.toISOString().split("T")[0];

    const response = await axios.post(`${API_URL}/api/DeleteAppointmentData`, {
      mrn: mrn,
      appointmentDate: formattedDate,
      appointmentNumber:appointmentnumber
    });

    console.log(response);

    if (response.data.success) {
      Swal.fire({
        icon: "success",
        title: "Appointment Deleted SuccessFully!",
        text: response.data.message,
        confirmButtonText: "OK",
      }).then(() => {
        resetFields();
        handleModeChange("find");
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

  const onsubmit = async () => {
    try {
      const formattedDate = selectedDateContent.toISOString().split("T")[0];

      if (mode === "add") {
        // Save logic
        const response = await axios.post(`${API_URL}/api/saveAppointment`, {
          mrn: mrn,
          appointmentDate: formattedDate,
          doctorContent: doctorContent,
          appointmentSlotContent: appointmentSlotContent,
          refferedby: refferedby,
          symptoms: symptoms,
          allergies: allergies,
          reasonforA: reasonforA,
        });

        console.log(response);

        if (response.data.success) {
          Swal.fire({
            icon: "success",
            title: "Appointment booked SuccessFully!",
            text: response.data.message,
            confirmButtonText: "OK",
          }).then(() => {
            handleModeChange("find");
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Booking Failed",
            text: response.data.message,
            confirmButtonText: "OK",
          });
        }
      } else if (mode === "edit") {
        // Update logic
        const response = await axios.post(
          `${API_URL}/api/UpdateAppointmentData`,
          {
            mrn: mrn,
            appointmentDate: formattedDate,
            doctorContent: doctorContent,
            appointmentSlotContent: appointmentSlotContent,
            refferedby: refferedby,
            symptoms: symptoms,
            allergies: allergies,
            reasonforA: reasonforA,
            appointmentNumber: appointmentnumber,
          }
        );

        console.log(response);

        if (response.data.success) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: response.data.message,
            confirmButtonText: "OK",
          }).then(() => {
            handleModeChange("find");
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Update Failed",
            text: response.data.message,
            confirmButtonText: "OK",
          });
        }
      }
    } catch (error) {
      console.error("Error with appointment action:", error);
      Swal.fire({
        icon: "error",
        title: "An Error Occurred",
        text: "There was an issue processing your request. Please try again later.",
        confirmButtonText: "OK",
      });
    }
  };

  const getAppointmentData = async () => {
    try {
      const formattedDate = selectedDate.toISOString().split("T")[0];

      let response = await axios.post(`${API_URL}/api/getAppointmentData`, {
        mrn: mrn,
        appointmentDate: formattedDate,
        doctorContent: doctor,
        appointmentSlotContent: appointmentSlot,
      });

      console.log("Response data:", response.data.data);

      if (response.data && response.data.data) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Data Fetched Successfully",
          confirmButtonText: "OK",
        }).then(() => {
          const [year, month, day] =
            response.data.data[0].appointmentDate.split("-");

          // Create a new Date object using the parsed values
          const dateFromResponse = new Date(year, month - 1, day); // month - 1 because months are 0-indexed

          // Set the selected date for the DatePicker
          setselectedDateContent(dateFromResponse);
          setappointmentnumber(response.data.data[0].appointmentNumber);
          setDoctorContent(response.data.data[0].doctorContent);
          handleDoctorChangeContent(response.data.data[0].doctorContent);
          setAppointmentSlotContent(
            response.data.data[0].appointmentSlotContent
          );
          setrefferedby(response.data.data[0].refferedby);
          setsymptoms(response.data.data[0].symptoms);
          setallergies(response.data.data[0].allergies);
          setreasonforA(response.data.data[0].reasonforA);
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "User data is not available in the response.",
          text: response.data.message,
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "User data is not available in the response.",
        text: error,
        confirmButtonText: "OK",
      });
    }
  };

  const getAllDoctorsData = async () => {
    try {
      let response = await axios.post(`${API_URL}/api/getDoctors`);

      if (response.data && response.data.data) {
        setDoctors(response.data.data); // Set doctors data
        console.log("Fetched doctors data:", response.data.data);
      } else {
        console.error("Doctors data is not available in the response.");
      }
    } catch (error) {
      console.error("Error fetching doctors data:", error);
    }
  };

  const getAppointmentSlots = async (doctorId) => {
    try {
      let response = await axios.post(`${API_URL}/api/getAppointmentSlots`, {
        doctorId: doctorId, // Send the doctorId in the request body
      });

      if (response.data && response.data.slots) {
        console.log("Fetched appointment slots:", response.data.slots);
        return response.data.slots; // Return the fetched slots
      } else {
        console.error(
          "Appointment slots data is not available in the response."
        );
        return []; // Return an empty array if no slots are found
      }
    } catch (error) {
      console.error("Error fetching appointment slots:", error);
      return []; // Return an empty array in case of an error
    }
  };

  return (
    <div>
      <section id="contact" className="contact">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div
                className="col-lg-12 aos-init aos-animate"
                data-aos="fade-right"
              >
                <div className="row">
                  <div className="col-md-8">
                  <h4
                      style={{
                        fontWeight: "bold", // Make the text bold
                        textAlign: "center", // Center the heading
                        marginBottom: "2px", // Add spacing below
                        borderBottom: "2px solid #1976d2", // Bottom border for separation
                        paddingBottom: "10px", // Padding below the text
                        display: "inline-block", // Shrinks to fit the content
                      }}
                    >
                      Appointment Scheduling
                    </h4>
                  </div>

                  <div className="col-md-4">
                    <h6
                      style={{
                        fontSize: "1.25rem",
                        color: "#007bff",
                        fontWeight: "bold",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      Generated MRN :{" "}
                      {storedUser ? storedUser.id || "MRN" : "Loading..."}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="SearchDiv" style={{ paddingTop: "20px" }}>
                <div className="border-wrapper">
                  <div className="php-email-form mt-4">
                    <div className="row align-items-center">
                      {/* Date Field */}
                      <div className="col-md-3 form-group">
                        <div>
                          <Form.Label>Select Date</Form.Label>
                        </div>
                        <div>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                              disabled={disabledstateSearch}
                              value={selectedDate}
                              onChange={handleDateChange}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  fullWidth
                                  size="small"
                                  variant="outlined"
                                  style={{ height: "40px" }}
                                />
                              )}
                            />
                          </LocalizationProvider>
                        </div>
                      </div>

                      {/* Select Doctor Field */}
                      <div className="col-md-3 form-group">
                        <Form.Label>Select Doctor</Form.Label>
                        <select
                          disabled={disabledstateSearch}
                          className="form-control"
                          name="doctor"
                          value={doctor}
                          onChange={(e) => handleDoctorChange(e.target.value)} // Call the handler
                          required
                        >
                          <option value="">Select Doctor</option>
                          {doctors.map((doc) => (
                            <option key={doc.id} value={doc.id}>
                              {doc.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Appointment Slots Field */}
                      <div className="col-md-3 form-group">
                        <Form.Label>Appointment Slots</Form.Label>
                        <select
                          disabled={disabledstateSearch}
                          className="form-control"
                          name="appointmentSlot"
                          value={appointmentSlot}
                          onChange={(e) => setAppointmentSlot(e.target.value)}
                          required
                        >
                          <option value="">Select Slot</option>
                          {slots.map((slot) => (
                            <option key={slot.slotId} value={slot.slotId}>
                              {slot.time}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Search Button */}
                      <div
                        className="col-md-3 form-group"
                        style={{ paddingLeft: "35px", paddingTop: "20px" }}
                      >
                        <Button
                          disabled={disabledstateSearch}
                          style={buttonStyle}
                          onClick={() => {
                            onSearch();
                          }}
                        >
                          Search
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ContentDiv" style={{ paddingTop: "20px" }}>
                <div className="border-wrapper">
                  <div className="php-email-form mt-4">
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <div>
                          <Form.Label>Appointment Date</Form.Label>
                        </div>
                        <div style={{ width: "100%" }}>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                              disabled={mode === "edit" ? true : disabledstate}
                              value={selectedDateContent}
                              onChange={handleDateChangeContent}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  fullWidth
                                  size="small"
                                  variant="outlined"
                                  style={{ width: "100%" }}
                                />
                              )}
                            />
                          </LocalizationProvider>
                        </div>
                      </div>

                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <Form.Label>Select Doctor</Form.Label>
                        <select
                          disabled={disabledstate}
                          className="form-control"
                          name="doctorContent"
                          value={doctorContent}
                          onChange={(e) =>
                            handleDoctorChangeContent(e.target.value)
                          } // Call the handler
                          required
                        >
                          <option value="">Select Doctor</option>
                          {doctors.map((doc) => (
                            <option key={doc.id} value={doc.id}>
                              {doc.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <Form.Label>Appointment Slots</Form.Label>
                        <select
                          disabled={disabledstate}
                          className="form-control"
                          name="appointmentSlotContent"
                          value={appointmentSlotContent}
                          onChange={(e) =>
                            setAppointmentSlotContent(e.target.value)
                          }
                          required
                        >
                          <option value="">Select Slot</option>
                          {slotsContent.map((slot) => (
                            <option key={slot.slotId} value={slot.slotId}>
                              {slot.time}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <Form.Label>Reffered By</Form.Label>
                        <input
                          disabled={disabledstate}
                          type="text"
                          className="form-control"
                          name="refferedby"
                          id="email"
                          placeholder="Reffered By"
                          value={refferedby}
                          onChange={(e) => {
                            setrefferedby(e.target.value);
                          }}
                          required=""
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <Form.Label>Symptoms</Form.Label>
                        <input
                          disabled={disabledstate}
                          type="text"
                          className="form-control"
                          name="Symptoms"
                          id="Symptoms"
                          placeholder="Your Symptoms"
                          value={symptoms}
                          onChange={(e) => {
                            setsymptoms(e.target.value);
                          }}
                          required=""
                        />
                      </div>

                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <Form.Label>Allergies</Form.Label>
                        <input
                          disabled={disabledstate}
                          type="text"
                          className="form-control"
                          name="Allergies"
                          id="Allergies"
                          placeholder="Your Allergies"
                          value={allergies}
                          onChange={(e) => {
                            setallergies(e.target.value);
                          }}
                          required=""
                        />
                      </div>
                    </div>

                    <div className=" form-group mt-3 mt-md-0">
                      <Form.Label>Reason for Appointment </Form.Label>
                      <input
                        disabled={disabledstate}
                        type="text"
                        className="form-control"
                        name="reasonforA"
                        id="reasonforA"
                        placeholder="Reason for Appointment"
                        value={reasonforA}
                        onChange={(e) => {
                          setreasonforA(e.target.value);
                        }}
                        required=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center" style={{ paddingTop: "10px" }}>
                <Button
                  style={buttonStyle}
                  onClick={() => {
                    onAdd();
                  }}
                >
                  Add
                </Button>
                <Button
                  style={buttonStyle}
                  onClick={() => {
                    onAbort();
                  }}
                >
                  Abort
                </Button>
                <Button
                  style={buttonStyle}
                  onClick={() => {
                    onEdit();
                  }}
                >
                  Edit
                </Button>

                <Button
                  style={buttonStyle}
                  onClick={() => {
                    onsubmit();
                  }}
                >
                  Save
                </Button>
                <Button
                  style={buttonStyle}
                  onClick={() => {
                    onDelete();
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
