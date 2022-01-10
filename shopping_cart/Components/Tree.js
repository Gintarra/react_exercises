import React, {useRef, useState} from 'react';


const Tree = () => {
    let [change, setChange] = useState(false);
    let [getToysR, setToysR] = useState(false);
    let [getToysB, setToysB] = useState(false);
    const inputs = {
        numberG: useRef()
    }

    function changeValue() {
        setChange(!change);
        console.log(change)
    }

    function addToys(color) {
        if (color === "red") {
            setToysR(!getToysR);
            console.log(getToysR)
        }
        if (color === "blue") {
            setToysB(!getToysB);
        }

    }

    function addGifts() {
        const newNum = {
            numberG: inputs.numberG.current.value
        }
        console.log(newNum)
        for (let i = 1; i <= newNum; i++) {
            return i;
        }
    }

    return (
        <div className="tree d-flex align-center justify-center">
            <div>
                <div className="position">
                    <img className="spruce" style={{filter: change && 'invert(80%)'}}
                         src="https://banner.uclipart.com/20200112/xvl/christmas-leaf-tree-spruce.png" alt=""/>
                </div>
                <img className={getToysR ? "toy1" : "d-none"} style={{top: "-450px", left: "520px"}}
                     src="https://clipart.info/images/ccovers/1495754294Blue-Christmas-Ball-PNG-Clipa.png" alt=""/>
                <img className={getToysB ? "toy11" : "d-none"} style={{top: "-100px", left: "450px"}}
                     src="https://www.freeiconspng.com/thumbs/christmas-ornaments-pictures/get-christmas-ornaments-pictures-21.png"
                     alt=""/>
                <img className={getToysR ? "toy1" : "d-none"} style={{top: "-350px", left: "500px"}}
                     src="https://clipart.info/images/ccovers/1495754294Blue-Christmas-Ball-PNG-Clipa.png" alt=""/>
                <img className={getToysB ? "toy11" : "d-none"} style={{top: "-150px", left: "300px"}}
                     src="https://www.freeiconspng.com/thumbs/christmas-ornaments-pictures/get-christmas-ornaments-pictures-21.png"
                     alt=""/>
                <img className={getToysR ? "toy1" : "d-none"} style={{top: "-300px", left: "200px"}}
                     src="https://clipart.info/images/ccovers/1495754294Blue-Christmas-Ball-PNG-Clipa.png" alt=""/>
                <img className={getToysB ? "toy11" : "d-none"} style={{top: "-400px", left: "200px"}}
                     src="https://www.freeiconspng.com/thumbs/christmas-ornaments-pictures/get-christmas-ornaments-pictures-21.png"
                     alt=""/>
                <img className={getToysR ? "toy1" : "d-none"} style={{top: "-200px", left: "200px"}}
                     src="https://clipart.info/images/ccovers/1495754294Blue-Christmas-Ball-PNG-Clipa.png" alt=""/>
                <img className={getToysB ? "toy11" : "d-none"} style={{top: "-350px", left: "200px"}}
                     src="https://www.freeiconspng.com/thumbs/christmas-ornaments-pictures/get-christmas-ornaments-pictures-21.png"
                     alt=""/>
                <img className={getToysR ? "toy1" : "d-none"}
                     src="https://clipart.info/images/ccovers/1495754294Blue-Christmas-Ball-PNG-Clipa.png" alt=""/>
                <img className={getToysB ? "toy11" : "d-none"} style={{top: "-300px", left: "200px"}}
                     src="https://www.freeiconspng.com/thumbs/christmas-ornaments-pictures/get-christmas-ornaments-pictures-21.png"
                     alt=""/>
            </div>
            
            
            <div>
                <img className="giftOne" src='/gift.png'
                 alt=""/>
                <img src="https://toppng.com/uploads/preview/old-coloured-gift-box-png-gold-gift-box-11563091356qukuuhikhf.png" alt=""/>
            </div>
            
            
            
            
            <div style={{marginLeft: "500px"}} className="d-flex column">
                <button onClick={changeValue}>Change tree color</button>
                <button onClick={() => addToys("red")}>Add Christmas toys(red)</button>
                <button onClick={() => addToys("blue")}>Add Christmas toys(blue)</button>
                <input type="number" placeholder="write a number of gifts" ref={inputs.numberG}/>
                <button onClick={() => addGifts()}>Add Christmas gifts</button>

            </div>

        </div>
    );
};

export default Tree;