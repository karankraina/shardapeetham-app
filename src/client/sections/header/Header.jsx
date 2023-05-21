import React from "react";
import { Link } from "react-router-dom";


export function Header() {
	return (
		<nav>
			<Link to={"/"} >Homepage</Link>
			<Link to={"/lessons"} >Lessons</Link>
			<Link to={"/about-us"} >About Us</Link>
		</nav>
	);
}