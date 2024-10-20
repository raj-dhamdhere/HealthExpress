import { response } from "express";
import User from "../modules/user.js";

async function register(req, res) {
	try {
		new User().registerUser(req.body);
		res.send({ success: true, message: "Registered Successfully" });
	} catch (e) {
		res.send({ success: false, error: e.toString() });
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

export default "";
export { register,loginUser};
