import './App.css';
import {useState} from "react";
import Cars from "./Components/Cars";
import Some from "./Components/Some";
import Some1 from "./Components/Some1";
import Some2 from "./Components/Some2";

function App4_1216cars() {

    const cars = [
        {
            model: "audi",
            color: 'red',
            fuelConsumption: 5,
            distance: 150
        },
        {
            model: "bmw",
            color: 'brown',
            fuelConsumption: 8,
            distance: 320
        },
        {
            model: "volvo",
            color: 'grey',
            fuelConsumption: 7,
            distance: 440
        },
    ]

    const [getState, setState] = useState(1)
    let result;

    function say() {
        setState(1)
    }

    function say1() {
        setState(2)
    }

    function say2() {
        setState(3)
    }

    if (getState === 1) {
        result = "First text"
    }

    if (getState === 2) {
        result = "Second text"
    }

    if (getState === 3) {
        result = "Third text dfdddddddddddddd"
    }


    return (
        <div>
            <div className="d-flex">
                <Cars carArr={cars[0]}/>
                <Cars carArr={cars[1]}/>
                <Cars carArr={cars[2]}/>
            </div>

            <div className="boxText">
                <h1>{result}</h1>
            </div>
            <div className='d-flex'>
            <Some state={say}/>
            <Some1 state={say1}/>
            <Some2 state={say2}/>
        </div>

        </div>

    )
}

export default App4_1216cars