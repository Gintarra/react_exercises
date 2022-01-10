import React from 'react';

const ShowReviews = ({allReviews}) => {
    console.log(allReviews)
    return (
        <div className="reviewsCard">
            <h1 style={{textAlign: "center"}}>All reviews: </h1>
            {allReviews.map((rev, index) => <div className="card" key={index}> <h3>Rate: {rev.r}/5</h3> <h4>{rev.t}</h4> </div>  )}
        </div>
    );
};

export default ShowReviews;