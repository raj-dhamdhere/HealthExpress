import express from "express";
const router = express.Router();


import { register,loginUser,getUserData,updateUserData } from "../Controller/user.js";

/* USER MANAGEMENT */
router.post("/api/registerUser", register);

/*Login User */
router.post("/api/loginUser", loginUser);

/*Get Demographic User Data */
router.post("/api/getUserData", getUserData);

/*Get Demographic User Data */
router.post("/api/updateUserData", updateUserData);


export default router;
