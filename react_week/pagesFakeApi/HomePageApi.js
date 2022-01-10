import React from 'react';
import {useState, useEffect} from "react";
import List from "../componentsFakeApi/List";
import {useNavigate} from "react-router-dom";

const HomePageApi = () => {
    const [getPro, setPro] = useState([])
   const navigate = useNavigate();
    const [getName, setName] = useState("products")
    let n = 0;


    function goToCategory(name) {
        navigate('/category/' + name)
        console.log(name)
        setName(name);
    }

        useEffect(() => {
            fetch( "https://fakestoreapi.com/products")
                .then(res => res.json())
                .then(data => {
                    setPro(data)
                })
        }, [])


    return (
        <div className="d-flex">
            <div className="sideBar2 d-flex column align-center">
                <h1>Categories: </h1>
                <button onClick={() => goToCategory("electronics")}>Electronics</button>
                <button onClick={() => goToCategory("jewelery")}>Jewelery</button>
                <button onClick={() => goToCategory("men's clothing")}>Men's clothing</button>
                <button onClick={() => goToCategory("women's clothing")}>Women's clothing</button>
            </div>
            <div><List products={getPro} category={getName}/></div>

        </div>
    );
};

export default HomePageApi;