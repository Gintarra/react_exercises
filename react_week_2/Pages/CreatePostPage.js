import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";

const CreatePostPage = ({sendData}) => {
    const navigate = useNavigate();
    const [getErrorTitle, setErrorTitle] = useState(0);
    const [getErrorImg, setErrorImg] = useState(0);
    const [getErrorDesc, setErrorDesc] = useState(0);
    const [getErrorH, setErrorH] = useState(0);
    const [getErrorW, setErrorW] = useState(0);
    const [getErrorC, setErrorC] = useState(0);
    const [getErrorB, setErrorB] = useState(0);

    const inputs = {
        title: useRef(),
        img: useRef(),
        desc: useRef(),
        h: useRef(),
        w: useRef(),
        color: useRef(),
        radius: useRef()
    }

    function validations(arg) {
        if (arg === "title") {
            if (inputs.title.current.value.length >= 10 && inputs.title.current.value.length <= 100) {
                console.log(inputs.title.current.value, "its ok")
                setErrorTitle( 0)
            } else {
                setErrorTitle(1)
            }
        }
        if (arg === "image") {
            if (inputs.img.current.value.includes("http")) {
                console.log(inputs.img.current.value, "its ok")
                setErrorImg(0)
            } else {
                setErrorImg(1)
            }
        }
        if (arg === "description") {
            if (inputs.desc.current.value.length >= 20 && inputs.desc.current.value.length <= 200) {
                setErrorDesc(0)
            } else {
                setErrorDesc(1)
            }
        }
        if (arg === "height") {
            if (inputs.h.current.value.length >= 1 && inputs.h.current.value.length <= 3) {
                setErrorH(0)
            } else {
                setErrorH(1)
            }
        }
        if (arg === "width") {
            if (inputs.w.current.value.length >= 1 && inputs.w.current.value.length <= 3) {
                setErrorW(0)
            } else {
                setErrorW(1)
            }
        }
        if (arg === "color") {
            if (inputs.color.current.value.length >= 1 && inputs.color.current.value.length <= 20 && typeof (inputs.color.current.value) === "string") {
                setErrorC(0)
            } else {
                setErrorC(1)
            }
        }

        if (arg === "borderRadius") {
            if (inputs.radius.current.value.length >= 1 && inputs.radius.current.value.length <= 2 && typeof Number(inputs.radius.current.value) === "number") {
                setErrorB(0)
            } else {
                setErrorB(0)
            }
        }
    }

    function getValues() {
        if (getErrorTitle === 0 && getErrorDesc === 0 && getErrorImg === 0
            && getErrorH === 0 && getErrorW === 0 && getErrorC === 0
            && getErrorB === 0 && !!inputs.title.current.value && !!inputs.img.current.value && !!inputs.desc.current.value
        && !!inputs.h.current.value && !!inputs.w.current.value && !!inputs.color.current.value && !!inputs.radius.current.value) {
           const allValues = {
                title: inputs.title.current.value,
                img: inputs.img.current.value,
                desc: inputs.desc.current.value,
                h: inputs.h.current.value,
                w: inputs.w.current.value,
                color: inputs.color.current.value,
                radius: inputs.radius.current.value,
                id: Math.round(Math.random()*999999)
            }
            sendData(allValues);
            navigate('/all-posts');
        } else {
            alert("Fill the form properly")
        }
    }

    return (
        <div className="d-flex column align-center createBox " >
            <h3>To create a post please fill up the form:</h3>
            <input style={{borderColor: getErrorTitle ? "red" : null}} onChange={() => validations("title")}
                   type="text" placeholder="title" ref={inputs.title}/>
            {getErrorTitle ? <div> Title must be 10-100 symbols length</div> : null}
            <input style={{borderColor: getErrorImg ? "red" : null}} onChange={() => validations("image")} type="text"
                   placeholder="image" ref={inputs.img}/>
            {getErrorImg ? <div> URL should include "http" </div> : null}
            <input style={{borderColor: getErrorDesc ? "red" : null}} onChange={() => validations("description")}
                   type="text"
                   placeholder="description" ref={inputs.desc}/>
            {getErrorDesc ? <div> Description must be 20-200 symbols length </div> : null}
            <input style={{borderColor: getErrorH ? "red" : null}} onChange={() => validations("height")}
                   type="number" placeholder="height" ref={inputs.h}/>
            {getErrorH ? <div> Height must be less than 1000 </div> : null}
            <input style={{borderColor: getErrorW ? "red" : null}} onChange={() => validations("width")}
                   type="number" placeholder="width" ref={inputs.w}/>
            {getErrorW ? <div> Width must be less than 1000 </div> : null}
            <input style={{borderColor: getErrorC ? "red" : null}} onChange={() => validations("color")}
                   type="text"
                   placeholder="color" ref={inputs.color}/>
            {getErrorC ? <div> Color should be string not longer than 20symbols </div> : null}
            <input style={{borderColor: getErrorB ? "red" : null}} onChange={() => validations("borderRadius")}
                   type="number" placeholder="border radius" ref={inputs.radius}/>
            {getErrorB ? <div> Border radius must be no longer than 2 symbols </div> : null}
            <button onClick={() => getValues()} className="createBtn">Create Post</button>
        </div>
    );
};

export default CreatePostPage;

// Post should have these fields
// title (min length 10, max 100, required)
// image (should include http - check if link, required)
// description (min length 20, max length 200, required)
// height - (numbers. max length 3, required)
// width - (numbers, max length 3, required)
// color - (should be string not longer than 20symbols, required)
// border radius - (numbers, max 2, required)
// id - (unique number which is generated automatically when post is created)