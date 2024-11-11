import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { TextField } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import Swal from "sweetalert2";
const API_URL = "http://ec2-34-246-124-95.eu-west-1.compute.amazonaws.com:3001";

const Login = () => {
  const [fname, setfname] = useState();
  const [lname, setlname] = useState();
  const [number, setnumber] = useState();
  const [password, setpassword] = useState();
  const [email, setemail] = useState();
  const [county, setcounty] = useState();
  const [pincode, setpincode] = useState();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [pps, setpps] = useState();
  const [address, setaddress] = useState();
  const [toggleState, setToggleState] = useState(false);
  const [insnumber, setinsnumber] = useState();
  const [user, setUser] = useState(null);
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  // const checkPhoneNo = async (e) => {
  // 	await setnumber(e);
  // 	if (e.length !== 10) {
  // 		setPhoneCheckErr("Please Enter full number");
  // 	} else {
  // 		let response = await axios.post(`${API_URL}/api/checkPhoneNumber`, {
  // 			number: e,
  // 		});
  // 		if (!response.data.Success) setPhoneCheckErr(response.data.message);
  // 	}
  // };

  // Inline styling for form container and fields
  const styles = {
	formContainer: {
	  border: "2px solid rgba(0, 123, 255, 0.4)", // Faded blue border with 40% opacity
	  borderRadius: "8px",                        // Rounded corners
	  padding: "30px",                            // Padding inside form
	  backgroundColor: "#f8f9fa"                  // Light gray background
	},
	inputField: {
	  borderRadius: "4px",                        // Rounded corners for input
	  padding: "10px"                             // Padding inside input
	}
  };

  const onsubmit = async (e) => {
    //const isValid = formValidation();
    // console.log(fname)
    // console.log(lname)
    // console.log(number)
    // console.log(email)
    // console.log(county)
    // console.log(pincode)
    // console.log(pps)
    // console.log(address)
    // console.log(toggleState)
    // console.log(insnumber)

    if (true) {
      let response = await axios.post(`${API_URL}/api/loginUser`, {
        number: number,
		password: password
      });

      console.log(response);
      if (response.data.success == true) {
        // alert("Record Saved Successfully");
        setnumber("");
		    setpassword("");
        sessionStorage.setItem("user", JSON.stringify(response.data.data));
        setUser(response.data.data); // Update local state
        window.open("/dashboard", "_self");
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: response.data.message,
          confirmButtonText: "OK",
        });
      }
    }
  };

  // const formValidation = () => {
  // 	const ownerNameerr = {};
  // 	const Shoperr = {};
  // 	const numbererr = {};
  // 	const emailerr = {};
  // 	const aadhaar = {};
  // 	const panerr = {};
  // 	let phoneno = /^\d{10}$/;
  // 	let Aadhar = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
  // 	let Pan = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  // 	let Pincode = /^[1-9]{1}[0-9]{2}[0-9]{3}$/;
  // 	let isValid = true;

  // 	if (owner.trim().length < 2) {
  // 		ownerNameerr.ownerNameshort = "First Name Short";
  // 		isValid = false;
  // 	}
  // 	setownerNameerr(ownerNameerr);

  // 	if (shop.trim().length < 2) {
  // 		Shoperr.Shoperrshort = "Shop Name Short";
  // 		isValid = false;
  // 	}
  // 	setShoperr(Shoperr);

  // 	if (!number.match(phoneno)) {
  // 		numbererr.numbererrshort = "Enter Valid No";
  // 		isValid = false;
  // 	}
  // 	setnumbererr(numbererr);

  // 	if (!email.includes("@")) {
  // 		emailerr.emailerrshort = "Enter Valid Email";
  // 		isValid = false;
  // 	}
  // 	setemailerr(emailerr);

  // 	if (!aadhar.match(Aadhar)) {
  // 		aadhaar.aadhaarerr = "Enter Valid Aadhar";
  // 		isValid = false;
  // 	}
  // 	setAadharerr(aadhaar);

  // 	if (!pan.match(Pan)) {
  // 		panerr.paanerr = "Enter Valid Pan";
  // 		isValid = false;
  // 	}
  // 	setPanerr(panerr);

  // 	if (!pincode.match(Pincode)) {
  // 		pinerr.piinerr = "Enter Valid Pincode";
  // 		isValid = false;
  // 	}
  // 	setPinerr(pinerr);

  // 	return isValid;
  // };

  // useEffect(() => {
  // 	returnAllShops();
  // 	getUserGateways();
  // }, []);

  return (
    <div>
      <section id="contact" className="contact">
        <div className="container">
          <div className="row" style={{ paddingTop: "100px" }}>
            <div className="col-lg-4 aos-init aos-animate" data-aos="fade-right">
              <div className="section-title">
                <h2>Login User</h2>
                <p>Login HERE</p>
              </div>
            </div>
            <div className="col-lg-8 aos-init aos-animate" data-aos="fade-left">
              <div className="php-email-form mt-4" style={styles.formContainer}>
                <Form.Group style={{ marginBottom: "20px" }}>
                  <Form.Label style={{fontWeight:"bold"}}>Mobile Number</Form.Label>
                  <input
                    type="number"
                    className="form-control"
                    name="number"
                    placeholder="Your number"
                    value={number}
                    onChange={(e) => setnumber(e.target.value)}
                    required=""
                    style={styles.inputField}
                  />
                </Form.Group>
                <Form.Group style={{ marginBottom: "20px" }}>
                  <Form.Label style={{fontWeight:"bold"}}>Password</Form.Label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    required=""
                    style={styles.inputField}
                  />
                </Form.Group>
                <div className="text-center">
                  <Button onClick={onsubmit}>Login</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ paddingTop: "25px" }}>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
