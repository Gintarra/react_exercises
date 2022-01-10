import React from 'react';
import {useState} from "react";

const Cart = ({arrProducts, addOrRemove}) => {
    console.log(arrProducts)

    function countTotal() {
        let sum = 0;
        arrProducts.map(x => sum += x.price * x.quantity)
        return sum;
    }


    return (
        <div className="d-flex justify-center wrap column">
            {arrProducts.map((x, index) =>
                <div className="card2 d-flex align-center space-ev " key={index}>
                    <img src={x.image} alt=""/>
                    <h3 style={{textAlign: "center"}}>Price: {x.price} Eur</h3>
                    <button onClick={() => addOrRemove(index, "-")}>Remove</button>
                    <h3>Quantity: {x.quantity} </h3>
                    <button onClick={() => addOrRemove(index, "+")}>Add</button>
                </div>
            )}
            <h2 style={{textAlign: "right", marginRight: "60px"}}>Total price: {countTotal()} Eur</h2>
        </div>
    );
};

export default Cart;