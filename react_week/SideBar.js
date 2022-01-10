import React from 'react';
import {Link} from "react-router-dom";

const SideBar = () => {
    return (
        <div className="sideBar grow1 d-flex column">
            <Link to="home">Home</Link>
            <Link to="gallery">Gallery</Link>
            <Link to="about">About</Link>
            <Link to="contacts">Contacts</Link>
        </div>
    );
};

export default SideBar;