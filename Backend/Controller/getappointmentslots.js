import { response } from "express";
import AppointmentSlots from "../modules/appointmentSlots.js"; // Import the AppointmentSlots class

async function getAppointmentSlots(req, res) {
    // Extract doctorId from the request body
    const { doctorId } = req.body;

    if (!doctorId) {
        return res.status(400).send({ success: false, error: "Doctor ID is required." });
    }

    try {
        // Create an instance of AppointmentSlots to fetch slots
        const appointmentSlotsInstance = new AppointmentSlots();
        const slots = await appointmentSlotsInstance.getAppointmentSlots(doctorId);

        // Send the response with fetched slots
        res.send({ success: true, slots: slots });
    } catch (e) {
        console.error("Error fetching appointment slots:", e);
        res.send({ success: false, error: e.toString() });
    }
}

export default "";
export { getAppointmentSlots };
