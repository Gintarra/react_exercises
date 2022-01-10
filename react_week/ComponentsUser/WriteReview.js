import React, {useEffect} from 'react';
import {useRef} from "react";

const WriteReview = ({sendData}) => {
    const text = useRef();
    let rate;

    function onChangeValue(e) {
        console.log(e)
        rate = e.target.attributes[2].nodeValue;
        console.log(e.target.checked);
    }

    function clearRadioButton(e) {
        e.target.checked = false;
    }

    function review(e) {
        if (e.key === "Enter") {
            sendData(text.current.value, rate);
            text.current.value = "";
        }
    }

    return (
        <div className="reviewBox d-flex column align-center">
            <div onChange={onChangeValue}>
                <h3>Select user's rating:</h3>
                <input type="radio" value="1" name="rating"/> 1
                <input type="radio" value="2" name="rating"/> 2
                <input type="radio" value="3" name="rating"/> 3
                <input type="radio" value="4" name="rating"/> 4
                <input type="radio" value="5" name="rating"/> 5
            </div>
            <h3></h3>
            <textarea ref={text} onKeyDown={review} placeholder="write review here"/>
        </div>
    );
};

export default WriteReview;