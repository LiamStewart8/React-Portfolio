import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';


function Navigation() {
    return(
        <Navbar bg="light" variant="light" sticky="top">
            <Navbar.Brand href="/">Liam Stewart</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link>
                    <Link to = "/" >Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                    <Link to = "/Work">Work</Link>
                    </Nav.Link>
                    <Nav.Link>
                    <Link to = "/About">About</Link>
                    </Nav.Link>
                </Nav>
        </Navbar>
    );
};

export default Navigation;