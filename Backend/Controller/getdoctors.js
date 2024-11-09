import { response } from "express";
import Doctors from "../modules/doctors.js";

async function getDoctors(req, res) { 
	try {
		let response = await new Doctors().getAlldoctors(); 
		res.send({ success: true, data: response });
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}

export default "";
export { getDoctors};
