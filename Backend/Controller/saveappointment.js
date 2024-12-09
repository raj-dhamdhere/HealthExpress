import { response } from "express";
import Appointment from "../modules/appointment.js";

async function saveAppointment(req, res) {
	try {
		const result = await new Appointment().saveAppointmentData(req.body);
		res.send(result); // Send the result directly from the register method
	} catch (e) {
		res.send({ success: false, error: e.toString() });
	}
}

async function updateAppointmentData(req, res) {
	try {
	  const result = await new Appointment().updateAppointmentDetails(req.body); // Await the update function
	  res.send(result); // Send the result directly from the update method
	} catch (e) {
	  res.send({ success: false, error: e.toString() }); // Catch any errors
	}
  }

  async function deleteAppointmentData(req, res) {
	try {
	  const result = await new Appointment().deleteAppointmentDetails(req.body); // Await the delete function
	  res.send(result); // Send the result directly from the delete method
	} catch (e) {
	  res.send({ success: false, error: e.toString() }); // Catch any errors
	}
  }


export default "";
export { saveAppointment,updateAppointmentData,deleteAppointmentData};
