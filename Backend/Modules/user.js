import db, {  userCollection} from "../DB.js";
import crypto from "crypto";


// Generate a random 32-byte encryption key
const encryptionKey = "Rajdhamdhere-is-Migate-Goku-akir";

const array1 = [];
const array2 = [];

const result = {};

// Function to encrypt data
function encryptData(plaintext) {
  const iv = crypto.randomBytes(16); // Generate a new Initialization Vector (IV) for each encryption
  const cipher = crypto.createCipheriv('aes-256-cbc', encryptionKey, iv);
  let encrypted = cipher.update(plaintext, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return `${iv.toString('hex')}:${encrypted}`;
}

// Function to decrypt data
function decryptData(ciphertext) {
  const [ivHex, encrypted] = ciphertext.split(':');
  const iv = Buffer.from(ivHex, 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', encryptionKey, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// // Example usage
// const plaintext = 'This is a secret message';


class User {
	constructor() {}

	async registerUser(userData) {

		// const decryptedData = decryptData(ciphertext);
		// console.log('Decrypted data:', decryptedData);
		
		//console.log(userData);


		Object.keys(userData).forEach(key => {
			const value = userData[key];
			const ciphertext = encryptData(value);
			array1.push(key);
			if(key!="number"){

				array2.push(ciphertext);
			}else{
				array2.push(value);
			}
			//console.log(`Key: ${key}, Value: ${value}`);
		});


		for (let i = 0; i < array1.length; i++) {
			result[array1[i]] = array2[i];
		}

		console.log(result);


		let response = await db.collection(userCollection).insertOne(result);
		//let response = await db.collection(userCollection).find({ number: userData.number }).toArray();

		// if (response[0] == undefined) {
		// 	let response = await db.collection(userCollection).insertOne(userData);

		// 	if (userData.isMaster) {
		// 		console.log(typeof response.insertedId);
		// 		//set master
		// 		await db.collection(userCollection).updateOne({ _id: response.insertedId }, { $set: { master: String(response.insertedId) } });
		// 	}
		// }
	}

	async loginUser(userData) {
		try {
			let response = await db.collection(userCollection).findOne({ number: userData.number});
	
			const decryptedData = decryptData(response.password);
			let decryptedDataFinal = decryptedData.toString();			

			if (userData.password == decryptedDataFinal) {
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
