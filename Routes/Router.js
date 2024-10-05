import express from "express";
const router = express.Router();


import { register,loginUser } from "../Controller/user.js";

/* USER MANAGEMENT */
router.post("/api/registerUser", register);

/*Login User */
router.post("/api/loginUser", loginUser);




export default router;
