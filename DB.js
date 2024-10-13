import { default as mongodb } from "mongodb";
let MongoClient = mongodb.MongoClient;
let ObjectId = mongodb.ObjectId;


// let connection = await MongoClient.connect("mongodb+srv://rajraspberry544:Banana69@healthexpress.cvuis.mongodb.net/?retryWrites=true&w=majority&appName=HealthExpress"
// );


let connection = await MongoClient.connect("mongodb://admin:password@ec2-18-202-48-70.eu-west-1.compute.amazonaws.com:27017/");
const DB = connection.db("HealthExpress");

const userCollection = "User";


export default DB;
export {
	ObjectId,
	userCollection
};
