import React, {useContext} from 'react';
import MyContext from "../contexts/MyContext";

const NumberComp = () => {
    const {getValue, setValue} = useContext(MyContext);

    function newNumber() {
        const random = Math.round(Math.random() * 100);
        setValue(random)
    }
    return (
        <div className="box">
            <button onClick={newNumber} className="btn">Send Number</button>
        </div>
    );
};

export default NumberComp;