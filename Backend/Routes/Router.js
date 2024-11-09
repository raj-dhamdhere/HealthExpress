import express from "express";
const router = express.Router();


import { register,loginUser,getUserData,updateUserData,DeleteAllData } from "../Controller/user.js";
import { getDoctors} from "../Controller/getdoctors.js";
import { getAppointmentSlots} from "../Controller/getappointmentslots.js";
import { saveAppointment,updateAppointmentData,deleteAppointmentData} from "../Controller/saveappointment.js";
import { getAppointmentData,getAppointmentAllData} from "../Controller/getappointment.js";
/* USER MANAGEMENT */
router.post("/api/registerUser", register);

/*Login User */
router.post("/api/loginUser", loginUser);

/*Get Demographic User Data */
router.post("/api/getUserData", getUserData);

/*Update Demographic User Data */
router.post("/api/updateUserData", updateUserData);

/*Get Demographic User Data */
router.post("/api/getDoctors", getDoctors);

// Route for getting appointment slots
router.post("/api/getAppointmentSlots", getAppointmentSlots);

// Route for Saving appointment data
router.post("/api/saveAppointment", saveAppointment);

/*Get Appointment Data */
router.post("/api/getAppointmentData", getAppointmentData);

/*Update Appointment Data */
router.post("/api/UpdateAppointmentData", updateAppointmentData);

/*Delete Appointment Data */
router.post("/api/DeleteAppointmentData", deleteAppointmentData);

/*Get Appointment Summary*/
router.post("/api/getAppointmentSummary", getAppointmentAllData);

/*Delete All User Patient Data and Appointment Data*/
router.post("/api/DeleteAllData", DeleteAllData);

export default router;
