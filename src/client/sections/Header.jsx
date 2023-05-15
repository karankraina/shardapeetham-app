import React from "react";
import { Link } from "react-router-dom";


export function Header() {
	return (
		<nav>
			<h1>This is header</h1>

			<Link to={"/"} >Homepage</Link>
			<Link to={"/lessons"} >Lessons</Link>
		</nav>
	);
}