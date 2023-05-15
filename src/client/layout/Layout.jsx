import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";

export function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}