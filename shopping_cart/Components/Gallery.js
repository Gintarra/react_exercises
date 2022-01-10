import React from 'react';

const Gallery = ({products, addProduct}) => {
    return (
        <div className="d-flex justify-center wrap">
            {products.map((x, index) =>
                    <div className="card d-flex column " key={index}>
                        <img src={x.image} alt=""/>
                        <h2 style={{textAlign: "center"}}>{x.title}</h2>
                        <h3 style={{textAlign: "center"}}>{x.price} Eur</h3>
                    <button className="add" onClick={() => addProduct(index)}>Add to cart</button>
                    </div>
            )}
        </div>
    );
};

export default Gallery;