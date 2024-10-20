import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import NavbarComponent from "../Navbar.js";
import Select from "react-select";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
const API_URL = "http://localhost:3001";

const Register = () => {
	const [owner, setowner] = useState();
	const [shop, setshop] = useState();
	const [number, setnumber] = useState();
	const [password, setpassword] = useState();
	const [email, setemail] = useState();
	const [address, setaddress] = useState();
	const [city, setcity] = useState();
	const [district, setdistrict] = useState();
	const [state, setstate] = useState();
	const [pincode, setpincode] = useState();
	const [pan, setpan] = useState();
	const [aadhar, setaadhar] = useState();
	const [Gst, setGst] = useState();
	const [daily, setdaily] = useState();
	const [ownerNameerr, setownerNameerr] = useState({});
	const [Shoperr, setShoperr] = useState({});
	const [numbererr, setnumbererr] = useState({});
	const [emailerr, setemailerr] = useState({});
	const [aadhaar, setAadharerr] = useState({});
	const [panerr, setPanerr] = useState({});
	const [pinerr, setPinerr] = useState({});
	const [isMaster, setMaster] = useState();
	const [masterDropdown, selectMasterDropdown] = useState(null);
	const [phoneCheckErr, setPhoneCheckErr] = useState("");

	const [registeredGateways, setRegisteredGateways] = useState([]);
	const [selectedRegisteration, setSelectedOption] = useState();

	const [masterUsers, setMasterUsers] = useState(undefined);

	const [toggleState, setToggleState] = useState(true);
	const [loading, setLoading] = useState(true);
	const [loadingChild, setLoadingChild] = useState(false);

	const checkPhoneNo = async (e) => {
		await setnumber(e);
		if (e.length !== 10) {
			setPhoneCheckErr("Please Enter full number");
		} else {
			let response = await axios.post(`${API_URL}/api/checkPhoneNumber`, {
				number: e,
			});
			if (!response.data.Success) setPhoneCheckErr(response.data.message);
		}
	};

	const onsubmit = async (e) => {
		console.log(selectedRegisteration);
		let GatewayRegister = [];
		if (selectedRegisteration) {
			GatewayRegister = selectedRegisteration.map((e) => {
				console.log(e);
				return e.value;
			});
		}

		const isValid = formValidation();

		if (true) {
			let response = await axios.post(`${API_URL}/api/registerUser`, {
				owner: owner,
				shop: shop,
				number: number,
				password: password,
				email: email,
				address: address,
				city: city,
				district: district,
				state: state,
				pincode: pincode,
				pan: pan,
				aadhar: aadhar,
				Gst: Gst,
				daily: daily,
				master: masterDropdown,
				gateway: GatewayRegister,
				isMaster: isMaster,
				loadingChild: loadingChild,
				autoSwitching: toggleState,
			});

			if (response.data.success) {
				window.open("/login", "_self");
			}
		}
	};

	const formValidation = () => {
		const ownerNameerr = {};
		const Shoperr = {};
		const numbererr = {};
		const emailerr = {};
		const aadhaar = {};
		const panerr = {};
		let phoneno = /^\d{10}$/;
		let Aadhar = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
		let Pan = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
		let Pincode = /^[1-9]{1}[0-9]{2}[0-9]{3}$/;
		let isValid = true;

		if (owner.trim().length < 2) {
			ownerNameerr.ownerNameshort = "First Name Short";
			isValid = false;
		}
		setownerNameerr(ownerNameerr);

		if (shop.trim().length < 2) {
			Shoperr.Shoperrshort = "Shop Name Short";
			isValid = false;
		}
		setShoperr(Shoperr);

		if (!number.match(phoneno)) {
			numbererr.numbererrshort = "Enter Valid No";
			isValid = false;
		}
		setnumbererr(numbererr);

		if (!email.includes("@")) {
			emailerr.emailerrshort = "Enter Valid Email";
			isValid = false;
		}
		setemailerr(emailerr);

		if (!aadhar.match(Aadhar)) {
			aadhaar.aadhaarerr = "Enter Valid Aadhar";
			isValid = false;
		}
		setAadharerr(aadhaar);

		if (!pan.match(Pan)) {
			panerr.paanerr = "Enter Valid Pan";
			isValid = false;
		}
		setPanerr(panerr);

		if (!pincode.match(Pincode)) {
			pinerr.piinerr = "Enter Valid Pincode";
			isValid = false;
		}
		setPinerr(pinerr);

		return isValid;
	};

	const returnAllShops = async () => {
		let response = await axios.post(`${API_URL}/api/returnAllUsers`);
		setMasterUsers(await response.data.data);
	};

	const getUserGateways = async () => {
		let response = await axios.post(`${API_URL}/api/getUserGateway`);
		// [
		// 	{ value: 'chocolate', label: 'Chocolate' },
		// 	{ value: 'strawberry', label: 'Strawberry' },
		// 	{ value: 'vanilla', label: 'Vanilla' },
		// ]
		let obj = response.data.data.map((e) => {
			return {
				value: e._id,
				label: `${e.registerName} / ${e.selectedGateway}`,
			};
		});
		setRegisteredGateways(await obj);
	};

	// useEffect(() => {
	// 	returnAllShops();
	// 	getUserGateways();
	// }, []);

	return (
		<div>
			<section id="contact" className="contact">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 aos-init aos-animate" data-aos="fade-right">
							<div className="section-title">
								<h2>Add User</h2>
								<p>Register HERE</p>
							</div>
						</div>

						<div className="col-lg-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
							<div className="info mt-4">
								<i className="bi bi-geo-alt"></i>
								<h4>Register:</h4>
							</div>

							<div className="php-email-form mt-4">
								<div className="row">
									<div className="col-md-6 form-group">
										<Form.Label>Owner Name</Form.Label>
										<input
											type="text"
											name="owner"
											className="form-control"
											id="owner"
											placeholder="Your Name"
											value={owner}
											onChange={(e) => {
												setowner(e.target.value);
											}}
											required=""
										/>
										{Object.keys(ownerNameerr).map((key) => {
											return <div style={{ color: "red" }}>{ownerNameerr[key]}</div>;
										})}
									</div>

									<div className="col-md-6 form-group mt-3 mt-md-0">
										<Form.Label>Shop Name</Form.Label>
										<input
											type="text"
											className="form-control"
											name="shop"
											id="shop"
											placeholder="Your shop"
											value={shop}
											onChange={(e) => {
												setshop(e.target.value);
											}}
											required=""
										/>
										{Object.keys(Shoperr).map((key) => {
											return <div style={{ color: "red" }}>{Shoperr[key]}</div>;
										})}
									</div>
								</div>
								<div className="row">
									<div className="col-md-6 form-group mt-3 mt-md-0">
										<Form.Label>Mobile Number</Form.Label>

										{phoneCheckErr ? (
											<span className="pl-3 text-danger">{phoneCheckErr}</span>
										) : (
											<span className="pl-3 text-success">Number can register</span>
										)}
										<input
											type="number"
											className="form-control"
											name="number"
											placeholder="Your number"
											value={number}
											onChange={(e) => {
												checkPhoneNo(e.target.value);
											}}
											required=""
										/>
										{Object.keys(numbererr).map((key) => {
											return <div style={{ color: "red" }}>{numbererr[key]}</div>;
										})}
									</div>

									<div className="col-md-6 form-group mt-3 mt-md-0">
										<Form.Label>Password</Form.Label>
										<input
											type="text"
											className="form-control"
											placeholder="Your password"
											value={password}
											onChange={(e) => {
												setpassword(e.target.value);
											}}
											required=""
										/>
										{Object.keys(emailerr).map((key) => {
											return <div style={{ color: "red" }}>{emailerr[key]}</div>;
										})}
									</div>
								</div>

								<div className="form-group mt-3 mt-md-0">
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
										<Form.Label>City</Form.Label>
										<input
											type="text"
											className="form-control"
											name="city"
											id="city"
											placeholder="Your city"
											value={city}
											onChange={(e) => {
												setcity(e.target.value);
											}}
											required=""
										/>
									</div>

									<div className="col-md-6 form-group mt-3 mt-md-0">
										<Form.Label>District</Form.Label>
										<input
											type="text"
											className="form-control"
											name="district"
											id="district"
											placeholder="Your district"
											value={district}
											onChange={(e) => {
												setdistrict(e.target.value);
											}}
											required=""
										/>
									</div>
								</div>

								<div className="row">
									<div className="col-md-6 form-group mt-3 mt-md-0">
										<Form.Label>State</Form.Label>
										<input
											type="text"
											className="form-control"
											name="state"
											id="state"
											placeholder="Your state"
											value={state}
											onChange={(e) => {
												setstate(e.target.value);
											}}
											required=""
										/>
									</div>

									<div className="col-md-6 form-group mt-3 mt-md-0">
										<Form.Label>Pincode</Form.Label>
										<input
											type="text"
											className="form-control"
											name="pincode"
											id="pincode"
											placeholder="Your pincode"
											value={pincode}
											onChange={(e) => {
												setpincode(e.target.value);
											}}
											required=""
										/>
										{Object.keys(pinerr).map((key) => {
											return <div style={{ color: "red" }}>{pinerr[key]}</div>;
										})}
									</div>
								</div>

								<div className="row">
									<div className="col-md-6 form-group mt-3 mt-md-0">
										<Form.Label>Pan No</Form.Label>
										<input
											type="text"
											className="form-control"
											name="pan"
											id="pan"
											placeholder="Your pan"
											value={pan}
											onChange={(e) => {
												setpan(e.target.value);
											}}
											required=""
										/>
										{Object.keys(panerr).map((key) => {
											return <div style={{ color: "red" }}>{panerr[key]}</div>;
										})}
									</div>

									<div className="col-md-6 form-group mt-3 mt-md-0">
										<Form.Label>Aadhar (Enter Space After 4 digit)</Form.Label>
										<input
											type="text"
											className="form-control"
											name="aadhar"
											id="aadhar"
											placeholder="Your Aadhar"
											value={aadhar}
											onChange={(e) => {
												setaadhar(e.target.value);
											}}
											required=""
										/>
										{Object.keys(aadhaar).map((key) => {
											return <div style={{ color: "red" }}>{aadhaar[key]}</div>;
										})}
									</div>
								</div>

								<div className=" form-group mt-3 mt-md-0">
									<Form.Label>Gst Optional</Form.Label>
									<input
										type="text"
										className="form-control"
										name="gst"
										id="gst"
										placeholder="Gst Optional"
										value={Gst}
										onChange={(e) => {
											setGst(e.target.value);
										}}
										required=""
									/>
								</div>

								<div className="row">
									<div className="col-md-6 form-group mt-3 mt-md-0">
										<Form.Label>Daily Limit</Form.Label>
										<input
											type="text"
											className="form-control"
											name="daily"
											id="daily"
											placeholder="Your daily"
											value={daily}
											onChange={(e) => {
												setdaily(e.target.value);
											}}
											required=""
										/>
									</div>
									<div className="col-md-6">
										<Form.Label>Select Registered Gateway</Form.Label>
										<Select
											defaultValue={null}
											onChange={(e) => {
												setSelectedOption(e);
											}}
											options={registeredGateways}
											isSearchable={true}
											isMulti={true}
										/>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6 form-group mt-3 mt-md-0">
										{loading ? (
											<div>
												<Row>
													<Col className="m-2">
														<span>Is a master ? </span>
														<BootstrapSwitchButton
															checked={isMaster}
															onlabel="YES"
															onstyle="success"
															offlabel="NO"
															offstyle="danger"
															style="w-50 mx-3"
															onChange={(checked) => {
																if (checked) {
																	setMaster(true);
																	setLoadingChild(false);
																} else {
																	setMaster(false);
																}
															}}
														/>
													</Col>
												</Row>
												<Row>
													<Col className="m-2">
														<span>As a child ?</span>
														<BootstrapSwitchButton
															checked={loadingChild}
															onlabel="YES"
															onstyle="success"
															offlabel="NO"
															offstyle="danger"
															style="w-50 mx-3"
															onChange={(checked) => {
																if (checked) {
																	setLoadingChild(true);
																	setMaster(false);
																} else {
																	setLoadingChild(false);
																}
															}}
														/>
													</Col>
												</Row>
											</div>
										) : (
											""
										)}
										{loadingChild ? (
											<div>
												<Row>
													<Col>
														<Form.Label>Select Master</Form.Label>
														<Form.Control
															as="select"
															custom
															onChange={(e) => {
																selectMasterDropdown(e.target.value);
															}}
															value={masterDropdown}>
															<option value=""></option>
															{masterUsers !== undefined
																? masterUsers.map((el) => {
																		return <option value={el._id}>{el.shop}</option>;
																  })
																: ""}
														</Form.Control>
													</Col>
												</Row>
											</div>
										) : (
											""
										)}
									</div>
									<div className="col-md-6 mt-4">
										<span>Auto Switch </span>
										<BootstrapSwitchButton
											checked={false}
											onlabel="ON"
											onstyle="success"
											offlabel="OFF"
											offstyle="danger"
											style="w-50 mx-3"
											onChange={(checked) => {
												setToggleState(checked);
											}}
										/>
									</div>
								</div>

								<div className="text-center">
									<Button
										onClick={() => {
											onsubmit();
										}}>
										Register
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
