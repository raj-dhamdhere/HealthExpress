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
						<Navbar.Brand href="#home" style={{color:"black"}}>HealthExpress</Navbar.Brand>
						<Nav className="mr-auto">
							<Nav.Link href="/" style={{color:"black"}}>Home</Nav.Link>
							<Nav.Link href="/about" style={{color:"black"}}>About Us</Nav.Link>
							<Nav.Link href="/pricing" style={{color:"black"}}>Register</Nav.Link>
							<Nav.Link href="/login"style={{color:"black"}}>Login</Nav.Link>
							{/* <Nav.Link href="/signup">Signup</Nav.Link> */}
						</Nav>

					</Navbar>
		</>
	);
}
