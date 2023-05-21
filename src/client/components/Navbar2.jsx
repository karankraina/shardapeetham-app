import React from "react";
import { Nav, Navbar, Container, Form, Button, Offcanvas } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

function NavbarComponent2() {
    return (
        <Navbar sticky="top" bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">Sharda</Navbar.Brand>
				<Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-md"
                    aria-labelledby="offcanvasNavbar-expand-md"
                    placement="end"
				>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbar-expand-md">
                        Contents
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
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
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
			</Container>
		</Navbar>
    )
}

export default NavbarComponent2;