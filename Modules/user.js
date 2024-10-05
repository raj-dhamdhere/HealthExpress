import db, {  userCollection} from "../DB.js";



class User {
	constructor() {}

	async registerUser(userData) {
		let response = await db.collection(userCollection).find({ number: userData.number }).toArray();

		if (response[0] == undefined) {
			let response = await db.collection(userCollection).insertOne(userData);
			if (userData.isMaster) {
				console.log(typeof response.insertedId);
				//set master
				await db.collection(userCollection).updateOne({ _id: response.insertedId }, { $set: { master: String(response.insertedId) } });
			}
		}
	}

	async loginUser(userData) {
		try {
			let response = await db.collection(userCollection).findOne({ number: userData.number, password: userData.password });

			if (response) {
				return { success: true };
			} else {
				return { success: false };
			}
		} catch (e) {
			return { success: false, message: String(e) };
		}
	}


	
}

export default User;
