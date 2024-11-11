import { default as mongodb } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

let MongoClient = mongodb.MongoClient;
let ObjectId = mongodb.ObjectId;


// let connection = await MongoClient.connect(process.env.DB_URI_ATLAS);

let connection = await MongoClient.connect("mongodb+srv://rajraspberry544:Banana69@healthexpress.cvuis.mongodb.net/?retryWrites=true&w=majority&appName=HealthExpress");


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
