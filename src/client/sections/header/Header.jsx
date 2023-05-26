import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Header() {
	return (
		<Navbar sticky="top" bg="dark" variant="dark" expand="md" collapseOnSelect>
			<Container>
				<Navbar.Brand as={Link} to="/" className="sharda">𑆯𑆳𑆫𑆢𑆳𑆥𑆵𑆜𑆁</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse>
					<Nav className="me-auto">
						<Nav.Link eventKey="1" as={Link} to="/">Homepage</Nav.Link>
						<Nav.Link eventKey="2" as={Link} to="/lessons">Lessons</Nav.Link>
						<Nav.Link eventKey="3" as={Link} to="/about-us">About Us</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}