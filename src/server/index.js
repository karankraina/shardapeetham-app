import express from "express";
import path from "path";
import { router } from "./api/router";

const app = express();

app.use("/", express.static(path.resolve(__dirname, "../../public")));
app.use("/", express.static(path.resolve(__dirname, "../../dist")));

app.use("/api", router);


app.get("*", (request, response) => {
	console.log("Request Incoming : ", request.url);
	const filePath = path.join(__dirname, "../../public/index.html"); 
	response.sendFile(filePath);
});


const { PORT = 8080 } = process.env;

app.listen(PORT, () => {
	console.log("Server Listening...");
});