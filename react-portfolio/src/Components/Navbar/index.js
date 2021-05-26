import React from 'react';
// import { Link } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";


function Navigation() {
    return(
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="#home">Liam Stewart</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Work</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
        </Navbar>
    );
};

export default Navigation;