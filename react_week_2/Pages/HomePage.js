import React from 'react';
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    function goToCreatePost(){
        navigate("/create-post")
    }

    return (
        <div className="d-flex column align-center  homeBox" >
            <button onClick={() => goToCreatePost()} className="createBtn">Create Post</button>

        </div>
    );
};

export default HomePage;