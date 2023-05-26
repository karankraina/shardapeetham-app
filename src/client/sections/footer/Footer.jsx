import React from "react";
import { Navbar, Container } from "react-bootstrap";

export function Footer() {
	return (
		<Navbar bg="dark" variant="dark" fixed="bottom">
			<Container>
				<Navbar.Text>
				©2023 Shardapeetham. All rights reserved.
				</Navbar.Text>
			</Container>
		</Navbar>
	);
}