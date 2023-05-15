import React from "react";
import {
	createRoutesFromElements, Route, createBrowserRouter
} from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { Lessons } from "./pages/Lessons";

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
	</Route>

);

export const routesCreated = createRoutesFromElements(routeElements);

export const router  = createBrowserRouter(routesCreated);