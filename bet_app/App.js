import './App.css';
import Item from "./Components/Item";
import Account from "./Components/Account";
import {useState} from "react";

function App() {
    const images = ["https://www.freeiconspng.com/thumbs/animal-icon-png/lion-animal-icon-png-11.png",
        "https://www.seekpng.com/png/full/94-949945_vector-royalty-free-download-black-cat-icon-free.png",
        "https://cdn-icons-png.flaticon.com/512/91/91544.png"]
    const [getRandom1, setRandom1] = useState(0)
    const [getRandom2, setRandom2] = useState(1)
    const [getRandom3, setRandom3] = useState(2)
    const [getMoney, setMoney] = useState(100)
    const [inputValue, setInputValue] = useState(0)
    const [getWinner, setWinner] = useState(false)
    let text = "You won!"


    function randomNum() {
        let numbers = [Math.floor(Math.random() * 3), Math.floor(Math.random() * 3),Math.floor(Math.random() * 3)]
        setRandom1(numbers[0]);
        setRandom2(numbers[1]);
        setRandom3(numbers[2]);
        if(numbers[0]===numbers[1] && numbers[1] === numbers[2]){
            setMoney(getMoney + Number(inputValue) * 10)
            setWinner(true)
        }else {
            setWinner(false)
        }
    }


    function moneyAmount(value) {
        console.log(value)
        setInputValue(value);
        if (value <= getMoney) {
            setMoney(getMoney - value);
        } else {
            alert("Your max bet is " + (getMoney))
        }
    }


    return (
        <div className="App d-flex column align-center ">
            <div className="d-flex">
                <Account money={getMoney} moneyAmount={moneyAmount}/>
                <Item symbol={images[getRandom1]}/>
                <Item symbol={images[getRandom2]}/>
                <Item symbol={images[getRandom3]}/>
            </div>
            <h2>{getWinner ? text: null}</h2>
            <button className="btn" onClick={randomNum}>SPIN</button>


        </div>
    );
}

export default App;
