import { response } from "express";
import Appointment from "../modules/appointment.js";


async function getAppointmentData(req, res) {
	try {
		let response = await new Appointment().getAppointmentDetails(req.body); //sending Appointment class Req body to get appointment Details
		res.send(response);
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}

async function getAppointmentAllData(req, res) {
	try {
		let response = await new Appointment().getAppointmentAllDetails(req.body);//sending Appointment class Req body to get all appointment Details
		res.send(response);
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}

export default "";
export {getAppointmentData,getAppointmentAllData};
