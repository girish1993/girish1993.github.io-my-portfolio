import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import MenuItem from './MenuItem';


function NavigationBar() { 
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <div style = {{float:"left", width:"70%"}}>
                <Navbar.Brand style={{fontSize:"23px"}}href="#home">Girish Bhatta</Navbar.Brand>
            </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav" style={{float:"right",width:"30%"}}>
            <Nav className="mr-auto">
                <MenuItem itemDetails = {{link:"/home",name:"Home"}} />
                <MenuItem itemDetails = {{link:"#link",name:"About Me"}} />
                <MenuItem itemDetails = {{link:"#link",name:"Projects"}} />
                <MenuItem itemDetails = {{link:"#link",name:"Blog"}} />
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;