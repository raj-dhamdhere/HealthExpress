import { response } from "express";
import Appointment from "../modules/appointment.js";


async function getAppointmentData(req, res) {
	try {
		let response = await new Appointment().getAppointmentDetails(req.body);
		res.send(response);
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}

async function getAppointmentAllData(req, res) {
	try {
		let response = await new Appointment().getAppointmentAllDetails(req.body);
		res.send(response);
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}

export default "";
export {getAppointmentData,getAppointmentAllData};
