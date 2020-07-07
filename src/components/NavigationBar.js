import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavigationBar() { 
    return (
        <Navbar  expand="lg">
            <Navbar.Brand href="#home">Girish Bhatta</Navbar.Brand>
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">About Me</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Blogs</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>

    );
}

export default NavigationBar;