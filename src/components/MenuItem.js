import React from 'react';
import Nav from 'react-bootstrap/Nav';

const eachHeaderStyle = {
    marginLeft : "10px",
    padding : "10px",
    marginRight: "10px",
    fontSize: "18px"
}

const MenuItem = ({itemDetails}) => {
    return(
        <Nav.Link style={eachHeaderStyle} href={itemDetails.link}> {itemDetails.name} </Nav.Link>
    );
}
export default MenuItem;