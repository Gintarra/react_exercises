import React, {useRef, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";


const EditPage = ({posts, sendData}) => {
const navigate = useNavigate();


    const inputs = {
        title: useRef(),
        img: useRef(),
        desc: useRef(),
        h: useRef(),
        w: useRef(),
        color: useRef(),
        radius: useRef()
    }
    const state = {
        title: 0,
        img: 0,
        desc: 0,
        h: 0,
        w: 0,
        color: 0,
        radius: 0
    }
    let allValues = {
        title: '',
        img: "",
        desc: "",
        h: 0,
        w: 0,
        color: "",
        radius: 0,
        id: 0
    }
    let [getError, setError] = useState(state);

    console.log(getError)

    function validations(arg) {
        if (arg === "title") {
            if (inputs.title.current.value.length >= 10 && inputs.title.current.value.length <= 100) {
                console.log(inputs.title.current.value, "its ok")
                allValues.title = inputs.title.current.value;
                setError({...getError, title: 0})
            } else {
                setError({...getError, title: 1})
                console.log(getError.title, "titles")
            }
        }
        if (arg === "image") {
            if (inputs.img.current.value.includes("http")) {
                console.log(inputs.img.current.value, "its ok")
                setError({...getError, img: 0})
            } else {
                setError({...getError, img: 1})
                console.log(getError.img, "titles")
            }
        }
        if (arg === "description") {
            if (inputs.desc.current.value.length >= 20 && inputs.desc.current.value.length <= 200) {
                setError({...getError, desc: 0})
            } else {
                setError({...getError, desc: 1})
            }
        }
        if (arg === "height") {
            if (inputs.h.current.value.length >= 1 && inputs.h.current.value.length <= 3) {
                setError({...getError, h: 0})
            } else {
                setError({...getError, h: 1})
            }
        }
        if (arg === "width") {
            if (inputs.w.current.value.length >= 1 && inputs.w.current.value.length <= 3) {
                setError({...getError, w: 0})
            } else {
                setError({...getError, w: 1})
            }
        }
        if (arg === "color") {
            if (inputs.color.current.value.length >= 1 && inputs.color.current.value.length <= 20 && typeof (inputs.color.current.value) === "string") {
                setError({...getError, color: 0})
            } else {
                setError({...getError, color: 1})
            }
        }

        if (arg === "borderRadius") {
            if (inputs.radius.current.value.length >= 1 && inputs.radius.current.value.length <= 2 && typeof Number(inputs.radius.current.value) === "number") {
                setError({...getError, radius: 0})
            } else {
                setError({...getError, radius: 1})
            }
        }
    }

    function getValues() {
        if (getError.title === 0 && getError.desc === 0 && getError.img === 0
            && getError.h === 0 && getError.w === 0 && getError.color === 0
            && getError.radius === 0) {
            allValues = {
                title: inputs.title.current.value,
                img: inputs.img.current.value,
                desc: inputs.desc.current.value,
                h: inputs.h.current.value,
                w: inputs.w.current.value,
                color: inputs.color.current.value,
                radius: inputs.radius.current.value,
                id: post[0].id
            }
            sendData(allValues);
            navigate('/all-posts');
        } else {
            alert("Fill the form properly")
        }
    }







    const {id} = useParams();
    console.log(id, "edito id")
    const post = posts.filter(x => x.id === Number(id));
    console.log(post, "onePost")
    return (
        <div className="d-flex column align-center">
            <h3>To edit a post please edit the form:</h3>
            <input style={{borderColor: getError.title ? "red" : null}} onChange={() => validations("title")}
                   type="text"  ref={inputs.title} defaultValue={post[0].title}/>
            {getError.title ? <div> Title must be 10-100 symbols length</div> : null}
            <input style={{borderColor: getError.img ? "red" : null}} onChange={() => validations("image")} type="text"
                    ref={inputs.img} defaultValue={post[0].img}/>
            {getError.img ? <div> URL should include "http" </div> : null}
            <input style={{borderColor: getError.desc ? "red" : null}} onChange={() => validations("description")}
                   type="text"
                   defaultValue={post[0].desc} ref={inputs.desc}/>
            {getError.desc ? <div> Description must be 20-200 symbols length </div> : null}
            <input style={{borderColor: getError.h ? "red" : null}} onChange={() => validations("height")}
                   type="number" defaultValue={post[0].h} ref={inputs.h}/>
            {getError.h ? <div> Height must be less than 1000 </div> : null}
            <input style={{borderColor: getError.w ? "red" : null}} onChange={() => validations("width")}
                   type="number" defaultValue={post[0].w} ref={inputs.w}/>
            {getError.w ? <div> Width must be less than 1000 </div> : null}
            <input style={{borderColor: getError.color ? "red" : null}} onChange={() => validations("color")}
                   type="text"
                   defaultValue={post[0].color} ref={inputs.color}/>
            {getError.color ? <div> Color should be string not longer than 20symbols </div> : null}
            <input style={{borderColor: getError.radius ? "red" : null}} onChange={() => validations("borderRadius")}
                   type="number" defaultValue={post[0].radius} ref={inputs.radius}/>
            {getError.radius ? <div> Border radius must be no longer than 2 symbols </div> : null}
            <button onClick={() => getValues()} className="createBtn">SAVE</button>
        </div>
    );
};

export default EditPage;