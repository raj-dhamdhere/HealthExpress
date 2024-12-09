import db, {  userCollection,appointmentsCollection} from "../DB.js";
import crypto from "crypto";


// Generate a random 32-byte encryption key
const encryptionKey = "Rajdhamdhere-is-Migate-Goku-akir";



// Function to encrypt data
function encryptData(plaintext) {
  const iv = crypto.randomBytes(16); // Generate a new Initialization Vector (IV) for each encryption
  const cipher = crypto.createCipheriv(process.env.DB_EncryptTechnique, encryptionKey, iv);
  let encrypted = cipher.update(plaintext, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return `${iv.toString('hex')}:${encrypted}`;
}

// Function to decrypt data
function decryptData(ciphertext) {
  const [ivHex, encrypted] = ciphertext.split(':');
  const iv = Buffer.from(ivHex, 'hex');
  const decipher = crypto.createDecipheriv(process.env.DB_EncryptTechnique, encryptionKey, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

async function generateUniqueId(prefix, collection) {
    let customId;
    let exists = true;

    while (exists) {
        const randomNum = Math.floor(Math.random() * 1000000);
        customId = `${prefix}${randomNum}`;

        // Check if this ID already exists in the collection
        const user = await db.collection(collection).findOne({ _id: customId });
        exists = !!user; // true if user exists, false otherwise
    }

    return customId;
}

// // Example usage
// const plaintext = 'This is a secret message';


class User {
	
	constructor() {}

  async registerUser(userData) {
    try {
        console.log(userData);
        let array1 = [];
        let array2 = [];
        let result = {};

        // Check if a user with the same number already exists
        const existingUser = await db.collection(userCollection).findOne({ number: userData.number });
        if (existingUser) {
            return {
                success: false,
                message: "User with this number already exists"
            };
        }

        // Generate unique ID
        let uniqueId = await generateUniqueId("HE", userCollection);

        // Process userData to encrypt values
        Object.keys(userData).forEach(key => {
            const value = userData[key];
            const ciphertext = encryptData(value);
            array1.push(key);
            if (key !== "number") {
                array2.push(ciphertext);
            } else {
                array2.push(value);
            }
        });

        // Combine arrays into a result object
        for (let i = 0; i < array1.length; i++) {
            result[array1[i]] = array2[i];
        }

        console.log(uniqueId);
        console.log(result);

        // Insert user into the database
        let response = await db.collection(userCollection).insertOne({ _id: uniqueId, ...result });

        // Check if insertion was successful
        if (response.acknowledged) {
            return {
                success: true,
                message: `Generated MRN : ${uniqueId}`
            };
        } else {
            return {
                success: false,
                message: "User registration failed"
            };
        }

    } catch (error) {
        console.error("Error registering user:", error);
        return {
            success: false,
            message: "User registration failed due to an error"
        };
    }
}



  async updateUserDatadetails(userData) {
    try {
      let array1 = [];
      let array2 = [];
      let result = {};
  
      const { id, ...dataWithoutId } = userData; // Separate id from other data
  
      // Encrypt each value except for certain fields like 'number' and 'id'
      Object.keys(dataWithoutId).forEach(key => {
        const value = dataWithoutId[key];
        const ciphertext = key !== "number" ? encryptData(value) : value;
        array1.push(key);
        array2.push(ciphertext);
      });
  
      // Merge keys and encrypted values back into a single object
      for (let i = 0; i < array1.length; i++) {
        result[array1[i]] = array2[i];
      }

      // Perform the update operation
      let response = await db.collection(userCollection).updateOne(
        { _id: id },  // Query to match the document by user ID
        { $set: result }  // Update the document with the encrypted fields
      );
  
      if (response.modifiedCount > 0) {
        return { success: true, message: "User data updated successfully." };
      } else {
        return { success: false, message: "User not found or no changes applied." };
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      return { success: false, message: "An error occurred while updating user data." };
    }
  }
  
  

async loginUser(userData) {
  // console.log(userData);
  try {
    
    let response = await db.collection(userCollection).findOne({ number: userData.number });

    const decryptedData = decryptData(response.password);
    let decryptedDataFinal = decryptedData.toString();

    let decryptedidFinal = response._id


	const decryptedname = decryptData(response.fname);
    let decryptednameFinal = decryptedname.toString();


    if (userData.password === decryptedDataFinal) {
    
      return {
        success: true,
        data: {
          id: decryptedidFinal,
          name: decryptednameFinal,
          number: userData.number 	,
          
        },
      };
    } else {
      
      return { success: false, message: "Incorrect password" };
    }
  } catch (e) {
    
    return { success: false, message: `Error: ${String(e)}` };
  }
}


async getUserDataDetails(id) {
  try {
    let response = await db.collection(userCollection).findOne({ _id: id });

    // Uncomment and use if needed for password decryption
    // const decryptedData = decryptData(response.password);
    // let decryptedDataFinal = decryptedData.toString();

    let decryptedidFinal = response._id;

    const decryptedname = decryptData(response.fname);
    let decryptednameFinal = decryptedname.toString();

    const decryptedlname = decryptData(response.lname);
    let decryptedlnameFinal = decryptedlname.toString();

    // Uncomment and use if needed for number decryption
    // const decryptednumber = decryptData(response.number);
    let decryptednumberFinal = response.number.toString();

    const decryptedemail = decryptData(response.email);
    let decryptedemailFinal = decryptedemail.toString();

    const decryptedcounty = decryptData(response.county);
    let decryptedcountyFinal = decryptedcounty.toString();

    const decryptedpincode = decryptData(response.pincode);
    let decryptedpincodeFinal = decryptedpincode.toString();

    const decrypteddob = decryptData(response.dob);
    let decrypteddobFinal = decrypteddob.toString();

    const decryptedpps = decryptData(response.pps);
    let decryptedppsFinal = decryptedpps.toString();

    const decryptedaddress = decryptData(response.address);
    let decryptedaddressFinal = decryptedaddress.toString();

    const decryptedhaveInsurance = decryptData(response.haveInsurance);
    let decryptedhaveInsuranceFinal = decryptedhaveInsurance.toString();

    const decryptedinsurancenumber = decryptData(response.insurancenumber);
    let decryptedinsurancenumberFinal = decryptedinsurancenumber.toString();

    return {
      success: true,
      data: {
        id: decryptedidFinal,
        fname: decryptednameFinal,
        lname: decryptedlnameFinal,
        number: decryptednumberFinal,
        email: decryptedemailFinal,
        county: decryptedcountyFinal,
        pincode: decryptedpincodeFinal,
        dob: decrypteddobFinal,
        pps: decryptedppsFinal,
        address: decryptedaddressFinal,
        haveInsurance: decryptedhaveInsuranceFinal,
        insurancenumber: decryptedinsurancenumberFinal
      },
    };
  } catch (error) {
    console.error("Error fetching or decrypting user data:", error);
    return { success: false, message: "An error occurred while retrieving user data." };
  }
}

async  DeleteAllDataDetails(userData) {
  const client = db.client; // Assuming 'db' is your database connection
  const session = client.startSession();

  try {
    console.log("Received User Data for Deletion:", userData);

    session.startTransaction();

    // Define the filter criteria to find the documents to delete
    const filter = { mrn: userData.mrn };
    const filterUser = { _id: userData.mrn };

    // Perform the delete operations within the transaction
    const appointmentResult = await db.collection(appointmentsCollection).deleteMany(filter, { session });
    const userResult = await db.collection(userCollection).deleteMany(filterUser, { session });

    // Commit the transaction
    await session.commitTransaction();

    // Check the response to confirm the deletions
    if (appointmentResult.deletedCount > 0 || userResult.deletedCount > 0) {
      return {
        success: true,
        message: "User and appointment data deleted successfully.",
        appointmentsDeleted: appointmentResult.deletedCount,
        usersDeleted: userResult.deletedCount
      };
    } else {
      return {
        success: false,
        message: "No matching data found to delete.",
      };
    }
  } catch (error) {
    // If an error occurs, abort the transaction
    await session.abortTransaction();
    console.error("Error deleting user and appointment data:", error);
    return {
      success: false,
      message: "An error occurred while deleting the data.",
    };
  } finally {
    // End the session
    session.endSession();
  }
}
	
}

export default User;
