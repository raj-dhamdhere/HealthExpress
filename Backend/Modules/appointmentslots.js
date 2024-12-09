import db, {  appointmentslotCollection} from "../DB.js";

class AppointmentSlots {
	
	constructor() {}

    async getAppointmentSlots(doctorId) {
        try {
            const appointmentSlots = await db
                .collection(appointmentslotCollection)
                .findOne({ doctorId: doctorId }, { projection: { slots: 1 } });
            
            return appointmentSlots ? appointmentSlots.slots : []; // slots are returned or the Empty Array
        } catch (error) {
            console.error("Error fetching appointment slots:", error);
            throw new Error("Failed to fetch appointment slots");
        }
    }

	
}

export default AppointmentSlots;
