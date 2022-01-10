import './App.css';
import Question from "./Components/Question";
import {useState} from "react";

// create a quiz app
// user answers questions and gets points for correct ones
// in main component you have only points counter and array with questions
// in child component you have question with answers


let quiz = [
    {
        question: "Kuriais metais krikštatėvis buvo išleistas pirmą kartą?",
        answers: ['1993', "1852", "1662", "1972"],
        correct: 3
    },
    {
        question: "Kuris aktorius pelnė geriausią aktoriaus Oskarą už filmus „Filadelfija“ (1993) ir „Forrest Gump“ (1994)?",
        answers: ['Jonas Bulijonas', "Tomas Kukuruzas", "Tom Hanks", "Mikas plikas"],
        correct: 2
    },
    {
        question: "Kiek savarankiškų komizionų padarė Alfredas Hitchcockas savo filmuose 1927–1976 metais?",
        answers: ['12', "37", "100", "2"],
        correct: 1
    },
    {
        question: "Kuris 1982 m. filmas buvo labai gerbėjų sutiktas dėl meilės tarp jauno, tėvo neturinčio priemiesčio berniuko ir pasiklydusio, geranoriško bei namuose gyvenančio svečio iš kitos planetos vaizdavimo?",
        answers: ['IR Nežemiškas', "Gelbėtojai", "Terminatorius", "Titanikas"],
        correct: 0
    },
    {
        question: "Kuri aktorė vaidino Mary Poppins 1964 m. Filme „Mary Poppins“?",
        answers: ['Angelina Joly', " Julie Andrews", "Karen Gillan", "Lucy Liu"],
        correct: 1
    }
]


function App() {
    const [getPoints, setPoints] = useState(0);
    const [getStatus, setStatus] = useState(1)
    let [n, setN] = useState(0);

    function chosenAnswer(answ) {
        console.log(n)
        if (answ === quiz[n].answers[quiz[n].correct]) {
            setPoints(getPoints + 1)
            console.log("yess")
        } else {
            console.log("nop")
        }
        setN(n + 1)
    }

    function newGame() {
        window.location.reload();
    }


    if (n >= 5) {
        setStatus(3)
        setN(0);
    }

    return (
        <div className="App">
            {(getStatus === 1) &&
            <div className="begin"><h1>Take the quiz</h1>
                <button className="btn" onClick={() => setStatus(2)}>Let's begin!</button>
            </div>
            }
            {(getStatus === 2) &&
            <Question oneQn={quiz[n]} chosenAnswer={chosenAnswer}/>
            }
            {(getStatus === 3) &&
            <div className="gameOver"><h1>Game Over</h1><h2>You did {getPoints} of {quiz.length}!</h2>
                <button className="btn" onClick={newGame}>Retry</button>
            </div>
            }

        </div>
    );
}

export default App;
