import React from "react";
import {
	createRoutesFromElements, Route, createBrowserRouter
} from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/home/Home";
import { Lessons } from "./pages/lessons/Lessons";
import { AboutUs } from "./pages/about-us/AboutUs";

export const routeElements = (
	
	<Route
		path="/"
		element={<Layout />}
	>
		<Route
			index
			element={<Home />}
		/>
		<Route
			path="/lessons"
			element={<Lessons />}
		/>
		<Route
			path="/about-us"
			element={<AboutUs />}
		/>
	</Route>

);

export const routesCreated = createRoutesFromElements(routeElements);

export const router  = createBrowserRouter(routesCreated);