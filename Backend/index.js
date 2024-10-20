import express, { json, urlencoded } from "express";


const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

import cors from "cors";
app.use(cors());

import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(express.static(path.join(path.resolve(), "public/build")));

import router from "./Routes/Router.js";
app.use("/", router);

import path from "path";
app.get("*", (req, res) => {
	res.sendFile(path.join(path.resolve() + "/public/build/index.html"));
});





const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
	console.log(`Running on ${PORT}`);
});
