import './App.css';
import {useState} from "react";
import Animal from "./Components/Animal_1216";

function App4_1216() {
    const animalArr = ['cow', 'dog', 'cat', 'fish', 'monkey'];
    const [getRandom, setRandom] = useState(0);
    const [getIndex, setIndex] = useState(0)

    function randomIndex() {
        setRandom(Math.floor(Math.random() * animalArr.length));
    }

    function randomIndexPrevious() {
        if(getRandom <= 0) {
            setRandom(4)
        } else {
            setRandom(getRandom - 1)
        }
    }

    function index() {
        if (getIndex >= animalArr.length-1) {
            setIndex(0)
        } else {
            setIndex(getIndex + 1);
        }
    }

    function indexPrevious() {
        if (getIndex <= 0) {
            setIndex(4)
        } else {
            setIndex(getIndex - 1);
        }
    }


    return (
        <div>
            <div className='d-flex justify-center column align-center'>
                <Animal anim={animalArr[getRandom]}/>
                <div className='d-flex'>
                <button className="nextBtn" onClick={randomIndexPrevious}> Previous</button>
                <button className="nextBtn" onClick={randomIndex}>Next </button>
                </div>

            </div>

            <div className='d-flex justify-center column align-center'>
                <Animal anim={animalArr[getIndex]}/>
                <div className='d-flex'>
                    <button className="nextBtn" onClick={indexPrevious}> Previous</button>
                    <button className="nextBtn" onClick={index}>Next</button>
                </div>
            </div>

        </div>

    )
}

export default App4_1216;