import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const API_URL = process.env.REACT_APP_API_URL_EC2;

const Register = () => {
  const [fname, setfname] = useState();
  const [lname, setlname] = useState();
  const [number, setnumber] = useState();
  const [password, setpassword] = useState();
  const [email, setemail] = useState();
  const [county, setcounty] = useState();
  const [address, setaddress] = useState();

  const styles = {
    formContainer: {
      border: "2px solid rgba(0, 123, 255, 0.4)", // Faded blue border with 40% opacity
      borderRadius: "8px", // Rounded corners
      padding: "30px", // Padding inside form
      backgroundColor: "#f8f9fa", // Light gray background
    },
    inputField: {
      borderRadius: "4px", // Rounded corners for input
      padding: "10px", // Padding inside input
    },
  };

  const validateInput = (field, value) => {
    switch (field) {
      case "fname":
        if (value.trim() === "") {
          Swal.fire({
            icon: "error",
            title: "Invalid First Name",
            text: "First name cannot be empty.",
          });
          setfname("");
          return false;
        }
        break;

      case "lname":
        if (value.trim() === "") {
          Swal.fire({
            icon: "error",
            title: "Invalid Last Name",
            text: "Last name cannot be empty.",
          });
          setlname("");
          return false;
        }
        break;

      case "number":
        if (!/^\d+$/.test(value)) {
          Swal.fire({
            icon: "error",
            title: "Invalid Mobile Number",
            text: "Mobile number should only contain digits.",
          });
          setnumber("");
          return false;
        }
        if (value.length > 9 && value.length < 10) {
          Swal.fire({
            icon: "error",
            title: "Invalid Mobile Number",
            text: "Mobile number cannot exceed 10 digits.",
          });
          setnumber("");
          return false;
        }
        break;

      case "email":
        if (value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          Swal.fire({
            icon: "error",
            title: "Invalid Email",
            text: "Please enter a valid email address.",
          });
          setemail("");
          return false;
        }
        break;

      case "password":
        if (value.length > 0 && value.length < 6) {
          Swal.fire({
            icon: "error",
            title: "Weak Password",
            text: "Password should be at least 6 characters long.",
          });
          setpassword("");
          return false;
        }
        break;

      case "county":
        if (value.trim() === "") {
          Swal.fire({
            icon: "error",
            title: "Invalid county Name",
            text: "county name cannot be empty.",
          });
          setcounty("");
          return false;
        }
        break;

      case "address":
        if (value.trim() === "") {
          Swal.fire({
            icon: "error",
            title: "Invalid address Name",
            text: "address cannot be empty.",
          });
          setaddress("");
          return false;
        }
        break;

      default:
        break;
    }
    return true;
  };

  const onsubmit = async (e) => {
    // Check if any field is empty or invalid before submitting
    if (
      !fname?.trim() ||
      !lname?.trim() ||
      !number?.trim() ||
      !password?.trim() ||
      !email?.trim() ||
      !county?.trim() ||
      !address?.trim()
    ) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Please fill in all required fields correctly before submitting.",
      });
      return;
    }

    // Additional check for mobile number (exactly 10 digits)
    if (!/^\d{10}$/.test(number)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Mobile Number",
        text: "Mobile number must be exactly 10 digits.",
      });
      return;
    }

    // Additional check for email (valid email format)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
      return;
    }

    // Additional check for password (minimum 6 characters)
    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password should be at least 6 characters long.",
      });
      return;
    }

    try {
      let response = await axios.post(`${API_URL}/api/registerUser`, {
        fname: fname,
        lname: lname,
        number: number,
        password: password,
        email: email,
        county: county,
        pincode: "",
        dob: "",
        pps: "",
        address: address,
        haveInsurance: "no",
        insurancenumber: "",
      });

      console.log(response);
      if (response.data.success) {
        Swal.fire({
          icon: "success",
          title: "Registered SuccessFully!",
          text: response.data.message,
          confirmButtonText: "OK",
        }).then(() => {
          setfname("");
          setlname("");
          setnumber("");
          setpassword("");
          setemail("");
          setcounty("");
          setaddress("");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: response.data.message,
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div>
      <section id="contact" className="contact">
        <div className="container">
          <div className="row" style={{ paddingTop: "50px" }}>
            <div
              className="col-lg-4 aos-init aos-animate"
              data-aos="fade-right"
            >
              <div className="section-title">
                <h2>Add User</h2>
                <p>Register HERE</p>
              </div>
            </div>
            <div className="col-lg-8 aos-init aos-animate" data-aos="fade-left">
              <div className="php-email-form mt-4" style={styles.formContainer}>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <Form.Label style={{ fontWeight: "bold" ,backgroundColor:"blue" }}>
                      First Name
                    </Form.Label>
                    <input
                      type="text"
                      name="fname"
                      className="form-control"
                      id="fname"
                      placeholder="Your Name"
                      value={fname}
                      onChange={(e) => setfname(e.target.value)}
                      onBlur={(e) => validateInput("fname", e.target.value)}
                      required=""
                      style={styles.inputField}
                    />
                  </div>

                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <Form.Label style={{ fontWeight: "bold" }}>
                      Last Name
                    </Form.Label>
                    <input
                      type="text"
                      className="form-control"
                      name="lname"
                      id="lname"
                      placeholder="Your Last Name"
                      value={lname}
                      onChange={(e) => setlname(e.target.value)}
                      onBlur={(e) => validateInput("lname", e.target.value)}
                      required=""
                      style={styles.inputField}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <Form.Label style={{ fontWeight: "bold" }}>
                      Mobile Number
                    </Form.Label>
                    <input
                      type="number"
                      className="form-control"
                      name="number"
                      placeholder="Your number"
                      value={number}
                      onChange={(e) => setnumber(e.target.value)}
                      onBlur={(e) => validateInput("number", e.target.value)}
                      required=""
                      style={styles.inputField}
                    />
                  </div>

                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <Form.Label style={{ fontWeight: "bold" }}>
                      Password
                    </Form.Label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="Your password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      onBlur={(e) => validateInput("password", e.target.value)}
                      required=""
                      style={styles.inputField}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <Form.Label style={{ fontWeight: "bold" }}>
                      Email
                    </Form.Label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      onBlur={(e) => validateInput("email", e.target.value)}
                      required=""
                      style={styles.inputField}
                    />
                  </div>

                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <Form.Label style={{ fontWeight: "bold" }}>
                      County
                    </Form.Label>
                    <input
                      type="text"
                      className="form-control"
                      name="county"
                      id="county"
                      placeholder="Your County"
                      value={county}
                      onChange={(e) => setcounty(e.target.value)}
                      onBlur={(e) => validateInput("county", e.target.value)}
                      required=""
                      style={styles.inputField}
                    />
                  </div>
                </div>

                <div className="form-group mt-3 mt-md-0">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Address
                  </Form.Label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    id="address"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setaddress(e.target.value)}
                    onBlur={(e) => validateInput("address", e.target.value)}
                    required=""
                    style={styles.inputField}
                  />
                </div>

                <div className="text-center" style={{ marginTop: "20px" }}>
                  <Button onClick={onsubmit}>Register</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
