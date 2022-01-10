import './App.css';
import AppendUsers from "./Components/Users";
//import App from "./App";
import {useState} from "react";
import RandomColor from "./Components/ChangeColor";
import AddPoints from "./Components/AddPoints";

const users = [
    {
        "id": 1,
        "gender": "male",
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "gender": "female",
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "gender": "male",
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
]

let colors = [
    '#61dafb',
    '#21748d',
    '#4FDA8FFF',
    '#E8E161FF',
    '#fd56a9'
]


function App2() {

    const [getRandom, setRandom] = useState(0);

    function index() {
        setRandom(Math.round(Math.random() * 4))
        console.log(getRandom)
    }


    return (
        <div>

            <div className="d-flex">
                <AppendUsers data={users[0]}/>
                <AppendUsers data={users[1]}/>
                <AppendUsers data={users[2]}/>
            </div>

            <RandomColor color={colors[getRandom]}/>
            <button onClick={index}>Change color</button>

            <div className="d-flex">
            <AddPoints point={1} sum={10} col='red'/>
            <AddPoints point={5} sum={50} col='green'/>
            <AddPoints point={2} sum={20} col='yellow'/>
            </div>

        </div>
    )
}


export default App2;