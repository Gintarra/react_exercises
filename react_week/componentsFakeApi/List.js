import React from 'react';
import {useNavigate} from "react-router-dom";

const List = ({products, category}) => {
    const navigate = useNavigate()
    if(category === "jewelery"){
        const arr = products.filter(x => x.category==="jewelery");
        console.log(arr, "new array")
    }


    function toSingleProduct( id) {
        navigate(`/singleProduct/${id}`)
    }
    console.log(products)
    return (
        <div className="d-flex wrap">
            {products.map((x, index) => <div className="box2 d-flex column align-center" key={index}>
                <h4>{x.title}</h4>
                <img onClick={() => toSingleProduct(x.id)} className="productImg" src={x.image} alt=""/>
                <h4>{x.description}</h4>
                <h2>{x.price} Eur</h2>

            </div>)}
        </div>
    );
};

export default List;