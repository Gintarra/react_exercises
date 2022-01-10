import React from 'react';
import {useParams} from "react-router-dom";
import List from "../componentsFakeApi/List";
import {useState, useEffect} from "react";

const SingleProduct = () => {
    const {id} = useParams();
    const [getPro, setPro] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/" + id)
            .then(res => res.json())
            .then(data => {
                setPro([data])
            })

    }, [])

    return (
        <div>
            <List products={getPro}/>
        </div>
    );
};

export default SingleProduct;