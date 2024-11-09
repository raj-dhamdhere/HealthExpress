import { response } from "express";
import User from "../modules/user.js";

async function register(req, res) {
	try {
		const result = await new User().registerUser(req.body);
		res.send(result); // Send the result directly from the register method
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}

async function updateUserData(req, res) {
	try {
	  const result = await new User().updateUserDatadetails(req.body); // Await the update function
	  res.send(result); // Send the result directly from the update method
	} catch (e) {
	  res.send({ success: false, error: e.toString() }); // Catch any errors
	}
  }
  

async function loginUser(req, res) {
	try {
		let response = await new User().loginUser(req.body);
		res.send(await response);
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}

async function getUserData(req, res) {
	try {
		let response = await new User().getUserDataDetails(req.body.id);
		res.send(response);
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}

async function DeleteAllData(req, res) {
	try {
		let response = await new User().DeleteAllDataDetails(req.body);
		res.send(response);
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}


export default "";
export { register,loginUser,getUserData,updateUserData,DeleteAllData};
