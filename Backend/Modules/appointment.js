import db, { appointmentsCollection } from "../DB.js";
import crypto from "crypto";

// Generate a random 32-byte encryption key
const encryptionKey = "Rajdhamdhere-is-Migate-Goku-akir";

// Function to encrypt data
function encryptData(plaintext) {
  const iv = crypto.randomBytes(16); // Generate a new Initialization Vector (IV) for each encryption
  const cipher = crypto.createCipheriv("aes-256-cbc", encryptionKey, iv);
  let encrypted = cipher.update(plaintext, "utf8", "hex");
  encrypted += cipher.final("hex");
  return `${iv.toString("hex")}:${encrypted}`;
}

// Function to decrypt data
function decryptData(ciphertext) {
  const [ivHex, encrypted] = ciphertext.split(":");
  const iv = Buffer.from(ivHex, "hex");
  const decipher = crypto.createDecipheriv("aes-256-cbc", encryptionKey, iv);
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

async function generateIncrementalAppointmentNumber(date, collection) {
  // Query the collection for the maximum appointment number on that date
  const result = await db
    .collection(collection)
    .find({ appointmentDate: date }) // Filter by the specific date
    .sort({ appointmentNumber: -1 }) // Sort by appointmentNumber in descending order
    .limit(1) // Get only the highest appointment number for that date
    .toArray();

  let maxAppointmentNumber = 0;
  if (result.length > 0) {
    // If there is an existing appointment, get the highest appointmentNumber
    maxAppointmentNumber = result[0].appointmentNumber;
  }

  // Increment the max number to get the next unique appointment number
  const newAppointmentNumber = maxAppointmentNumber + 1;

  return newAppointmentNumber;
}

// // Example usage
// const plaintext = 'This is a secret message';

class Appointment {
  constructor() {}

  async saveAppointmentData(userData) {
    try {
      // Check if there's already an appointment with the same date, doctor, and slot
      const existingAppointment = await db
        .collection(appointmentsCollection)
        .findOne({
          appointmentDate: userData.appointmentDate,
          doctorContent: userData.doctorContent,
          appointmentSlotContent: userData.appointmentSlotContent,
        });

      // If an appointment exists with the same date, doctor, and slot, return an error

      if (existingAppointment) {
        return {
          success: false,
          message:
            "This time slot is already booked for the selected doctor on this date. Please choose a different slot.",
        };
      }

      // Generate a unique appointment number for the given date
      let uniqueId = await generateIncrementalAppointmentNumber(
        userData.appointmentDate,
        appointmentsCollection
      );
      console.log("Generated appointment number:", uniqueId);

      // Add the unique appointment number to the userData object
      userData.appointmentNumber = uniqueId;

      // Insert the updated userData into the database
      let response = await db
        .collection(appointmentsCollection)
        .insertOne(userData);

      // Check if the insertion was successful
      if (response.acknowledged) {
        return {
          success: true,
          message: `Appointment number : ${uniqueId}`,
        };
      } else {
        return {
          success: false,
          message: "Appointment booking failed",
        };
      }
    } catch (error) {
      console.error("Error in booking appointment:", error);
      return {
        success: false,
        message: "Appointment booking failed due to an error",
      };
    }
  }

  async getAppointmentDetails(userData) {
    try {
      // Perform the database query to find matching appointment details
      const response = await db
        .collection(appointmentsCollection)
        .find({
          mrn: userData.mrn,
          appointmentDate: userData.appointmentDate,
          doctorContent: userData.doctorContent,
          appointmentSlotContent: userData.appointmentSlotContent,
        })
        .toArray();

      // Check if any appointments were found
      if (!response.length) {
        return {
          success: false,
          message: "No matching appointment found for the specified criteria.",
          data: null,
        };
      }

      // If appointments found, return success with data
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      // Log error details for debugging
      console.error("Error fetching appointment data:", error);

      // Return structured error response with additional error information
      return {
        success: false,
        message: "An error occurred while retrieving appointment data.",
        error: error.message, // Provide specific error message
        data: null,
      };
    }
  }

  async getAppointmentAllDetails(userData) {
    try {
      // Perform the database query to find matching appointment details
      const response = await db
        .collection(appointmentsCollection)
        .find({
          mrn: userData.mrn
        })
        .toArray();

      // Check if any appointments were found
      if (!response.length) {
        return {
          success: false,
          message: "No matching appointment found for the specified criteria.",
          data: null,
        };
      }

      // If appointments found, return success with data
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      // Log error details for debugging
      console.error("Error fetching appointment data:", error);

      // Return structured error response with additional error information
      return {
        success: false,
        message: "An error occurred while retrieving appointment data.",
        error: error.message, // Provide specific error message
        data: null,
      };
    }
  }

  async updateAppointmentDetails(userData) {
    try {
      console.log("Received User Data for Update:", userData);

      // Check if the appointment slot is already taken by another entry
      const existingAppointment = await db
        .collection(appointmentsCollection)
        .findOne({
          appointmentDate: userData.appointmentDate,
          doctorContent: userData.doctorContent,
          appointmentSlotContent: userData.appointmentSlotContent,
          appointmentNumber: { $ne: userData.appointmentNumber }, // Exclude the current appointment by number
        });

      // If an appointment exists with the same date, doctor, and slot, return an error
      if (existingAppointment) {
        return {
          success: false,
          message:
            "This time slot is already booked for the selected doctor on this date. Please choose a different slot.",
        };
      }

      // Define the filter criteria to find the document to update
      const filter = {
        appointmentDate: userData.appointmentDate,
        appointmentNumber: userData.appointmentNumber,
        mrn: userData.mrn,
      };

      // Define the fields to update
      const updateFields = {
        doctorContent: userData.doctorContent,
        appointmentSlotContent: userData.appointmentSlotContent,
        refferedby: userData.refferedby,
        symptoms: userData.symptoms,
        allergies: userData.allergies,
        reasonforA: userData.reasonforA,
      };

      // Perform the update operation
      const response = await db
        .collection(appointmentsCollection)
        .updateOne(filter, { $set: updateFields });

      // Check the response to confirm the update
      if (response.modifiedCount > 0) {
        return {
          success: true,
          message: "Appointment data updated successfully.",
        };
      } else if (response.matchedCount === 0) {
        return {
          success: false,
          message: "No matching appointment found to update.",
        };
      } else {
        return {
          success: true,
          message: "No changes applied to the appointment data.",
        };
      }
    } catch (error) {
      console.error("Error updating appointment data:", error);
      return {
        success: false,
        message: "An error occurred while updating appointment data.",
      };
    }
  }

  async  deleteAppointmentDetails(userData) {
    try {
      console.log("Received User Data for Deletion:", userData);
  
      // Define the filter criteria to find the document to delete
      const filter = {
        mrn: userData.mrn,
        appointmentDate: userData.appointmentDate,
        appointmentNumber: userData.appointmentNumber,
      };
  
      // Perform the delete operation
      const response = await db.collection(appointmentsCollection).deleteOne(filter);
  
      // Check the response to confirm the deletion
      if (response.deletedCount > 0) {
        return {
          success: true,
          message: "Appointment deleted successfully.",
        };
      } else {
        return {
          success: false,
          message: "No matching appointment found to delete.",
        };
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
      return {
        success: false,
        message: "An error occurred while deleting the appointment.",
      };
    }
  }
  

}

export default Appointment;
