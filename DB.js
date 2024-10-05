import { default as mongodb } from "mongodb";
let MongoClient = mongodb.MongoClient;
let ObjectId = mongodb.ObjectId;


let connection = await MongoClient.connect("mongodb+srv://rajraspberry544:Banana69@healthexpress.cvuis.mongodb.net/?retryWrites=true&w=majority&appName=HealthExpress"
);

const DB = connection.db("HealthExpress");

const userCollection = "User";


export default DB;
export {
	ObjectId,
	userCollection
};
