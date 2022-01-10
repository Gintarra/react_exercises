import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";


const AllPosts = () => {
    const navigation = useNavigate();
    const [getData, setData] = useState([]);

    function getPosts() {
        fetch("http://167.99.138.67:1111/getallposts")
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
                setData(data.data)
            })
    }

    useEffect(() => {
        getPosts();
    }, []);

    function getName(username) {
        navigation('/userposts/'+(username))
    }

    return (
        <div>
            <h1>All posts</h1>
            {getData.map((x, i) => <div className="post" key={i}>
                <h4 onClick={() => getName(x.username)}>{x.username}</h4>
                <h5>{x.title}</h5>
                <p>{x.description} </p></div>)}
        </div>
    );
};

export default AllPosts;