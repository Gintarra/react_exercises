import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

const OnePost = () => {

    const [getData, setData] = useState([]);
    const {id} = useParams();
    const {username} = useParams();

    function getPosts() {
        fetch("http://167.99.138.67:1111/getsinglepost/"+username+"/"+ id)
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
                setData(data.data)
            })
    }

    useEffect(() => {
        getPosts();
    }, []);



    return (
        <div>
            <h1>Post with id: {id}</h1>
             <div className="post" >
                <h4 >{getData.username}</h4>
                <h5>{getData.title}</h5>
                <p>{getData.description} </p></div>)
        </div>
    );
};

export default OnePost;