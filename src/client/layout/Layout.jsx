import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../sections/footer/Footer";
import { Header } from "../sections/header/Header";

export function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}