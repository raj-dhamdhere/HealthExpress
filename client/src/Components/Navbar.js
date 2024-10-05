import React from "react";
import Navbar from "react-bootstrap/Navbar";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
export default function NavbarComponent() {
	return (
		<>
			<Navbar bg="light" variant="light">
						<Navbar.Brand href="#home">Gymnazien</Navbar.Brand>
						<Nav className="mr-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/about">About Us</Nav.Link>
							<Nav.Link href="/contact">Contact us</Nav.Link>
							<Nav.Link href="/pricing">Pricing</Nav.Link>
							<Nav.Link href="/login">Login</Nav.Link>
							{/* <Nav.Link href="/signup">Signup</Nav.Link> */}
						</Nav>
						<Form inline>
							<FormControl
								type="text"
								placeholder="Search"
								className="mr-sm-2"
							/>
							<Button variant="outline-info">Search</Button>
						</Form>
					</Navbar>
		</>
	);
}
