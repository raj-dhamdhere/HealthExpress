import db, {  doctorCollection} from "../DB.js";

class Doctors {
	
	constructor() {}

    async getAlldoctors() {
        try {
            const doctors = await db
                .collection(doctorCollection)
                .find({}, { projection: { id: 1, name: 1 } }) // Select only id and name
                .toArray();
            
            return doctors; // Return the retrieved data
        } catch (error) {
            console.error("Error fetching doctors:", error);
            throw new Error("Failed to fetch doctors");
        }
    }

	
}

export default Doctors;
