import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navBar d-flex space-ev align-center">
            <Link to="home">Home</Link>
            <Link to="gallery">Gallery</Link>
            <Link to="about">About</Link>
            <Link to="contacts">Contacts</Link>
        </div>
    );
};

export default NavBar;