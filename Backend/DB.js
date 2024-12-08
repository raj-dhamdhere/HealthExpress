import { default as mongodb } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;


 let connection = await MongoClient.connect(process.env.DB_URI_ATLAS);

// let connection = await MongoClient.connect(process.env.DB_URI_EC2);
const DB = connection.db("HealthExpress");

const userCollection = "User";

const doctorCollection = "Doctors";

const appointmentslotCollection = "AppointmentSlots";

const appointmentsCollection = "Appointment";
export default DB;
export {
	ObjectId,
	userCollection,
	doctorCollection,
	appointmentslotCollection,
	appointmentsCollection
};
