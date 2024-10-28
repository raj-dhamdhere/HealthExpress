import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { TextField,Checkbox } from "@mui/material";
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
  const [toggleState, setToggleState] = useState("no");
  const [insnumber, setinsnumber] = useState();
  const [storedUser, setStoredUser] = useState(null);
  const [disabledstate, setdisabledstate] = useState(true);
  const [mrn, setmrn] = useState();
  const buttonStyle = {
    width: '100px',  // Set the desired width
    height: '40px',  // Set the desired height
    margin: '0 10px' // Margin to space out the buttons
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleChangeCheckbox = (event) => {
    const newChecked = event.target.checked;
    console.log(newChecked)
    if(newChecked){
      setToggleState("yes"); // Set the toggle state based on the checkbox status
    }else{
      setToggleState("no"); // Set the toggle state based on the checkbox status
      setinsnumber(""); // Clear the insurance number if the checkbox is unchecked
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
    // Call getUserData when mrn is set
    if (mrn) {
      getUserData();
    }
  }, [mrn]); // Depend on mrn so it runs whenever mrn changes

  const getUserData = async () => {
    try {
      let response = await axios.post(`${API_URL}/api/getUserData`, { id: mrn });
      console.log("Response data:", response.data.data);

      if (response.data && response.data.data) {
        setfname(response.data.data.fname);
        setlname(response.data.data.lname);
        setnumber(response.data.data.number);
        setemail(response.data.data.email);
        setcounty(response.data.data.county);
        setpincode(response.data.data.pincode);
        setpps(response.data.data.pps);
        setaddress(response.data.data.address);

        setToggleState(response.data.data.haveInsurance);

        setinsnumber(response.data.data.insurancenumber);

      const dateFromResponse = new Date(response.data.data.dob); // Assuming dob is in ISO format
      setSelectedDate(dateFromResponse); // Set the selected date
      } else {
        console.error("User data is not available in the response.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
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

  const onEdit = async (e) => {
    setdisabledstate(false);
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
      let response = await axios.post(`${API_URL}/api/updateUserData`, {
        id:mrn,
        fname: fname,
        lname: lname,
        number: number,
        email: email,
        county: county,
        pincode: pincode,
        dob:selectedDate,
        pps: pps,
        address: address,
        haveInsurance: toggleState.toString(),
        insurancenumber: insnumber,
      });

      console.log(response);
      if (response.data.success == true) {
        alert("Record Updated Successfully");
        getUserData();
        setdisabledstate(true);
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
                      disabled={disabledstate}
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
                      disabled={disabledstate}
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
                      disabled={disabledstate}
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
                      disabled={disabledstate}
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
                      disabled={disabledstate}
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
                      disabled={disabledstate}
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
                          disabled={disabledstate}
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
                      disabled={disabledstate}
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
                    disabled={disabledstate}
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
                      {/* <BootstrapSwitchButton
                        disabled = {disabledstate}
                        checked={false}
                        onlabel="yes"
                        onstyle="success"
                        offlabel="No"
                        offstyle="danger"
                        style="w-50 mx-3"
                        onClick={(checked) => {
                          setToggleState(checked);
                        }}
                      /> */}
                      <Checkbox
                        disabled={disabledstate}
                        checked={toggleState === "yes"}
                        onChange={handleChangeCheckbox}
                        color="primary" // You can customize the color
                      />
                    </div>
                  </div>

                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <Form.Label>Insurance Number</Form.Label>
                    <input
                      disabled={disabledstate || (toggleState === "no")}
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

                <div className="text-center" style={{ paddingTop: "10px" }}>
                  <Button
                    style={buttonStyle}
                    onClick={() => {
                      onEdit();
                    }}
                  >
                    Edit
                  </Button>
                  &nbsp; &nbsp; &nbsp;
                  <Button
                    style={buttonStyle}
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
