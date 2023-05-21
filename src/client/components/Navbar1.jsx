import React from "react";
import { Nav, Navbar, Container, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

function NavbarComponent1() {
    return (
        <Navbar sticky="top" bg="dark" variant="dark" expand="md" collapseOnSelect>
			<Container>
				<Navbar.Brand as={Link} to="/">Sharda</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/">Homepage</Nav.Link>
						<Nav.Link as={Link} to="/lessons">Lessons</Nav.Link>
						<Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
					</Nav>
					<Form className="d-flex">
						<Form.Control
						type="search"
						placeholder="Search"
						className="me-2"
						aria-label="Search"
						/>
						<Button variant="outline-success"><BsSearch /></Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
    )
}

export default NavbarComponent1;