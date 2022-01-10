import {useState} from "react";

function AddPoints(props) {
    const [getPoints, setPoints] = useState(0);
    function add() {
        setPoints(getPoints+props.point)
    }


    return (
        <div className='box d-flex column align-center'>
            <button className='btn' style={{backgroundColor: getPoints > props.sum ? props.col: ''}} onClick={add}>Add</button>
            <h1>{getPoints}</h1>
        </div>
    )

}

export default AddPoints;