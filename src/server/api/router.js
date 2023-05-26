import {Router} from "express";

export const router = Router();

router.get("/lessons", (request, response) => {
	response.send(
		[
			{
				id: 1,
				title: "Lesson 1",
			}
		]
	);
});

router.get("/about-us", (request, response) => {
	response.send("<h1>About Us from API</h1>");
});