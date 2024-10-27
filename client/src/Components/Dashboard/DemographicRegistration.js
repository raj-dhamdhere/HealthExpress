import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { TextField } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
const API_URL = "http://localhost:3001";

const Register = () => {
  const [fname, setfname] = useState();
  const [lname, setlname] = useState();
  const [number, setnumber] = useState();
  const [email, setemail] = useState();
  const [county, setcounty] = useState();
  const [pincode, setpincode] = useState();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [pps, setpps] = useState();
  const [address, setaddress] = useState();
  const [toggleState, setToggleState] = useState(false);
  const [insnumber, setinsnumber] = useState();
  const [storedUser, setStoredUser] = useState(null);

  const buttonStyle = {
    width: '100px',  // Set the desired width
    height: '40px',  // Set the desired height
    margin: '0 10px' // Margin to space out the buttons
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  // Retrieve session storage data on component load
  useEffect(() => {
    const storedUserdata = sessionStorage.getItem("user");
    if (storedUserdata) {
      setStoredUser(JSON.parse(storedUserdata));
    }
  }, []); // Empty dependency array to run only on mount

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
      let response = await axios.post(`${API_URL}/api/registerUser`, {
        fname: fname,
        lname: lname,
        number: number,
        email: email,
        county: county,
        pincode: pincode,
        dob:selectedDate,
        pps: pps,
        address: address,
        haveInsurrance: toggleState.toString(),
        insurancenumber: insnumber,
      });

      console.log(response);
      if (response.data.success == true) {
        alert("Record Saved Successfully");
        setfname("");
        setlname("");
        setnumber("");
        setemail("");
        setcounty("");
        setpincode("");
        setpps("");
        setaddress("");
        setToggleState(false);
        setinsnumber("");
      } else {
        alert("Record Saving Failed");
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
                    <h4>Demographic Details</h4>
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
              <div className="php-email-form mt-4">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <Form.Label>First Name</Form.Label>
                    <input
                      type="text"
                      name="fname"
                      className="form-control"
                      id="fname"
                      placeholder="Your Name"
                      value={fname}
                      onChange={(e) => {
                        setfname(e.target.value);
                      }}
                      required=""
                    />
                  </div>

                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <Form.Label>Last Name</Form.Label>
                    <input
                      type="text"
                      className="form-control"
                      name="lname"
                      id="lname"
                      placeholder="Your Last Name"
                      value={lname}
                      onChange={(e) => {
                        setlname(e.target.value);
                      }}
                      required=""
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <Form.Label>Mobile Number</Form.Label>
                    <input
                      type="number"
                      className="form-control"
                      name="number"
                      placeholder="Your number"
                      value={number}
                      onChange={(e) => {
                        setnumber(e.target.value);
                      }}
                      required=""
                    />
                  </div>

                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <Form.Label>Email</Form.Label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                      required=""
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <Form.Label>County</Form.Label>
                    <input
                      type="text"
                      className="form-control"
                      name="county"
                      id="county"
                      placeholder="Your County"
                      value={county}
                      onChange={(e) => {
                        setcounty(e.target.value);
                      }}
                      required=""
                    />
                  </div>

                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <Form.Label>EIR Code</Form.Label>
                    <input
                      type="text"
                      className="form-control"
                      name="pincode"
                      id="pincode"
                      placeholder="Your EIR Code"
                      value={pincode}
                      onChange={(e) => {
                        setpincode(e.target.value);
                      }}
                      required=""
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <div>
                      <Form.Label>DOB</Form.Label>
                    </div>
                    <div>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                          value={selectedDate}
                          onChange={handleDateChange}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              fullWidth
                              variant="outlined"
                              style={{
                                height: "56px", // Match height of other input fields
                              }}
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </div>
                  </div>

                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <Form.Label>PPS Number</Form.Label>
                    <input
                      type="text"
                      className="form-control"
                      name="PPS"
                      id="PPS"
                      placeholder="Your PPS"
                      value={pps}
                      onChange={(e) => {
                        setpps(e.target.value);
                      }}
                      required=""
                    />
                  </div>
                </div>

                <div className=" form-group mt-3 mt-md-0">
                  <Form.Label>Address</Form.Label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    id="address"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => {
                      setaddress(e.target.value);
                    }}
                    required=""
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <div>
                      <Form.Label>Have Insurance</Form.Label>
                    </div>
                    <div>
                      <BootstrapSwitchButton
                        checked={false}
                        onlabel="yes"
                        onstyle="success"
                        offlabel="No"
                        offstyle="danger"
                        style="w-50 mx-3"
                        onClick={(checked) => {
                          setToggleState(checked);
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <Form.Label>Insurance Number</Form.Label>
                    <input
                      type="text"
                      className="form-control"
                      name="Insurance"
                      id="Insurance"
                      placeholder="Your Insurance Number"
                      value={insnumber}
                      onChange={(e) => {
                        setinsnumber(e.target.value);
                      }}
                      required=""
                    />
                  </div>
                </div>

                <div className="text-center">
                  <Button style = {buttonStyle}
                    onClick={() => {
                      onsubmit();
                    }}
                  >
                    Edit
                  </Button>
                  &nbsp; &nbsp; &nbsp;
                  <Button style = {buttonStyle}
                    onClick={() => {
                      onsubmit();
                    }}
                  >
                    Save
                  </Button>
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
