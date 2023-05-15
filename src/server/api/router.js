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

