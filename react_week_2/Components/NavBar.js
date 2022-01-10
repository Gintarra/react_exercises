import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navBar d-flex space-ev">
            <Link to="/" style={{color: "black"}}>Home</Link>
            <Link to="all-posts" style={{color: "black"}}>All Posts</Link>
        </div>
    );
};

export default NavBar;