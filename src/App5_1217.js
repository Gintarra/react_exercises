import './App.css';
import {useState} from "react";
// import Comp from "./Components/Comp";
// import Comp1 from "./Components/Comp1";
import Shop from "./Components/Shop";
import User from "./Components/User";

function App5_1217() {
    // const [getText, setText,] = useState('Text0')
    // const [getColor, setColor] = useState('black')

    // function change(index){
    //     console.log(index)
    //     if(index === 1){
    //         setText("my cat is black")
    //         setColor("green")
    //     }
    //     if(index === 2){
    //         setText("I have a dog")
    //         setColor("aqua")
    //     }
    //     if(index === 3){
    //         setText("My dog is cute")
    //         setColor("pink")
    //     }
    // }

    const [getPrice, setPrice] = useState(0);
    const [getImg, setImg] = useState("")
    const [getItems, setItems] = useState([]);
    let [getN, setN] = useState(0);
    const [getMoney, setMoney] = useState(1000)

    function items(price, imgUrl) {
        setPrice(price);
        setImg(imgUrl);
        //  setItems(price, imgUrl)
        if(getMoney >= price) {
            setMoney(getMoney - price)
        } else {
            alert ("You dont have enough money")
            return;
        }

        setItems([...getItems, {p:price, im:imgUrl}])
       // console.log(getItems)
        setN(getN+1)
        appendItems();
    }

    function appendItems() {
        console.log(getItems)
      //  getItems.map(x =>
       // )
    }
    const userImg = ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Emoji_u1f385.svg/768px-Emoji_u1f385.svg.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxUSKhnfMe879lj7UtRXYX_3PZTPJoRhALaA&usqp=CAU"    ]

    return (
        <div className="d-flex align-center">

            {/*    <Comp text={getText} color={getColor}/>*/}
            {/*    <div className="d-flex">*/}
            {/*    <Comp1 text={"my cat is black"} color={"green"} addInfo={() => change(1)}/>*/}
            {/*    <Comp1 text={"I have a dog"} color={"aqua"} addInfo={() => change(2)}/>*/}
            {/*    <Comp1 text={"My dog is cute"} color={"pink"} addInfo={() => change(3)}/>*/}
            {/*</div>*/}


            <User  data2={getItems} data3={getN<10 ? userImg[0] : userImg[1]} data4={getN} data5={getMoney}/>
            <Shop data={items}/>
        </div>
    )
}

export default App5_1217