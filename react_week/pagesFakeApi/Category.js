import React from 'react';
import {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import List from "../componentsFakeApi/List";


const Category = () => {
    const [getPro, setPro] = useState([])
    const {categoryName} = useParams();




    console.log("first time", categoryName)


    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/" + categoryName)
            .then(res => res.json())
            .then(data => {
                setPro(data)
                console.log(data, "pagal kategorija")
            })

    }, [])

    return (
        <div>
            <List products={getPro}/>
        </div>
    );
};

export default Category;