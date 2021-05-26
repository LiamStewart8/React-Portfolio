import React from 'react';
import { Navbar, Nav } from "react-bootstrap";


function Navigation() {
    return(
        <Navbar bg="light" variant="light" sticky="top">
            <Navbar.Brand href="#home">Liam Stewart</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Work">Work</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                </Nav>
        </Navbar>
    );
};

export default Navigation;