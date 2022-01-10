import './App.css';
import Word from "./pages/Word";
import Number from "./pages/Number";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {useState} from "react";
import MyContext from "./contexts/MyContext";



function App() {

    const [getValue, setValue] = useState("");

    return (
        <MyContext.Provider value={{getValue, setValue}}>
                <div className="App">
                    <BrowserRouter>
                    <div className="appBox" >
                        <h1> {getValue}</h1>
                    </div>

                        <div className="navBar d-flex space-ev">
                            <Link className="link" to="/word">Word</Link>
                            <Link className="link"  to="/number">Number</Link>
                        </div>
                        <Routes>
                            <Route path="/word" element={<Word/>}/>
                            <Route path="/number" element={<Number/>}/>
                        </Routes>

                    </BrowserRouter>
                </div>
        </MyContext.Provider>
    );
}

export default App;
