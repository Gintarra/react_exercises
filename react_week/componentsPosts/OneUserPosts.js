import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";


const OneUserPosts = () => {
    const {username} = useParams();
    const [getData, setData] = useState([]);
    const navigation = useNavigate();

    function getPosts() {
        fetch("http://167.99.138.67:1111/getuserposts/" + username)
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
                setData(data.data)
            })
    }

    useEffect(() => {
        getPosts();
    }, []);

    function getName(username, id) {
        navigation('/userposts/'+(username)+"/"+id)
    }

    return (
        <div>
           <h1>{username} posts: </h1>
            {getData.map((x, i) => <div onClick={() => getName(x.username, x.id)} className="post" key={i}>
                <h5>{x.title}</h5>
                <p>{x.description} </p></div>)}

        </div>
    );
};

export default OneUserPosts;
