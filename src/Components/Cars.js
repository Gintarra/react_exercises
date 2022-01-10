import {useState} from "react";

function Cars({carArr}) {
    //carArr - vienas objektas atsiustas

    const [sum, setSum] = useState();
    let imgUrl = "";

    function count() {
        setSum(`This trip consumed ${(carArr.distance/100*carArr.fuelConsumption).toFixed(2)} liters of fuel`)
    }

    if(carArr.model === 'audi'){
        imgUrl = "https://allcarbrandslist.com/wp-content/uploads/2020/12/Audi-Logo-s.png"
    }
    if(carArr.model === 'bmw'){
        imgUrl = "https://www.integrity.lt/wp-content/uploads/2017/01/BMW-logo-2000-2048x2048-2.png"
    }
    if(carArr.model === 'volvo'){
        imgUrl = "https://www.towhooks.eu/wp-content/uploads/2017/03/Volvo-logo-2012-2048x2048.png"
    }



    return (
        <div className="boxCar d-flex justify-center column align-center" style={{backgroundColor: carArr.color}}>
            <img className="logo" src={imgUrl}
                 alt=""/>
            <h2>Consumption: {carArr.fuelConsumption} Distance:{carArr.distance}</h2>
            <h2 style={{textAlign: "center"}}> {sum} </h2>
            <button className="nextBtn" onClick={count}>Count consumption</button>
        </div>
    )
}

export default Cars;