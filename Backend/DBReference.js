import { default as mongodb } from "mongodb";
let MongoClient = mongodb.MongoClient;
let ObjectId = mongodb.ObjectId;

// let connection = await MongoClient.connect("mongodb://localhost:27017/", {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// });

let connection = await MongoClient.connect("mongodb+srv://rajraspberry544:Banana69@healthexpress.cvuis.mongodb.net/?retryWrites=true&w=majority&appName=HealthExpress"
// 	, {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// }
);

const DB = connection.db("HealthExpress");

const userCollection = "User";

// const vehicleCollection="Player"

// const InventoryCollection = "InventoryCollection"

// const MAGSCollection="MAGScoresheet"

// const WAGSCollection="WAGScoresheet"

// const MAGConsolidated="MAGConsolidated"

// const WAGConsolidated="WAGConsolidated"

// const ItemSellCollection = "ItemSell"

// const RevenueCount = "RevenueCount"

// const ArtificialIntelligence = "ArtificialIntelligence"

// const CloudComputing = "CloudComputing"

// const Contract = "Contract"

// const DataScience = "DataScience"

// const Industry = "Industry"

// const MachineLearning = "MachineLearning"

export default DB;
export {
	ObjectId,
	userCollection
	// ,
	// vehicleCollection,
	// MAGSCollection,
	// WAGSCollection,
	// MAGConsolidated,
	// WAGConsolidated,
	// InventoryCollection,
	// ItemSellCollection,
	// RevenueCount,
	// ArtificialIntelligence,
	// CloudComputing,
	// Contract,
	// DataScience,
	// Industry,
	// MachineLearning

};
