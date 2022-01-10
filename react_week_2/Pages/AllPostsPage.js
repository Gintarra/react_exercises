import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

const AllPostsPage = ({posts}) => {
    const navigate = useNavigate();
    const {id} = useParams();

    function update(id) {
        console.log(id, "post")
        navigate("/edit-post/"+id)
    }
    console.log(posts)
    return (
        <div className="d-flex wrap allBox ">
            {posts.map((x, index) =>
                <div className="card d-flex column align-center" style={{
                    borderRadius: x.radius + "px",
                    height: x.h + "px",
                    width: x.w + "px",
                    border: "solid black 2px",
                    margin: "20px",
                    padding: "20px",
                    backgroundColor: "white"
                }} key={index}>
                    <h3>{x.title}</h3>
                    <img style={{width: "40%", height: "40%"}} src={x.img} alt=""/>
                    <p style={{color: x.color}}>{x.desc}</p>
                    <button className="updateBtn" onClick={() => update(x.id)}>Update post</button>
                </div>)}
        </div>
    );
};

export default AllPostsPage;