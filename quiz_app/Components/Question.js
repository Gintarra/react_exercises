import React from 'react';

const Question = ({oneQn, chosenAnswer}) => {

    return (
        <div className="d-flex column align-center">
            <h2 style={{textAlign: "center", margin: "60px"}}>{oneQn.question}</h2>
            <div className="box" onClick={() => chosenAnswer(oneQn.answers[0])}><h2 style={{margin: 0}}>{oneQn.answers[0]}</h2></div>
            <div className="box" onClick={() => chosenAnswer(oneQn.answers[1])}><h2 style={{margin: 0}}>{oneQn.answers[1]}</h2></div>
            <div className="box" onClick={() => chosenAnswer(oneQn.answers[2])}><h2 style={{margin: 0}}>{oneQn.answers[2]}</h2></div>
            <div className="box" onClick={() => chosenAnswer(oneQn.answers[3])} ><h2 style={{margin: 0}}>{oneQn.answers[3]}</h2></div>
        </div>
    );
};

export default Question;