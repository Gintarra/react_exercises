import './App.css';
import Home from "./Components/Home";
import Toolbar from "./Components/Toolbar";
import Gallery from "./Components/Gallery";
import Cart from "./Components/Cart";
import {useState} from "react";


function App() {
    // create simple web shop page
// there should be three pages - home page, shop page and user cart
// in home page put dummy data, some text and maybe photo
// in shop page you will show all products, each product should have title, price, photo and button
// - when clicked button will add that product to shopping cart
// in shopping cart you show added products in table, each product should have title, price, photo, quantity
// - product quantity can be changed, depending on that total price changes also
// also make global toolbar where you can navigate through pages
// / in toolbar by shopping card link you will show number of products in shopping cart

    const products = [
        {
            image: "https://www.smow.com/pics/vt-078-000/a/vitra-panton-chair-dark-lime_zoom.jpg",
            title: "green chair",
            price: 35.38
        },
        {
            image: "https://secure.img1-fg.wfcdn.com/im/64091119/resize-h600-w600%5Ecompr-r85/9988/99885278/Accent+Chairs.jpg",
            title: "simple chair",
            price: 19.99
        },
        {
            image: "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/87344_XXX_v1.tif&qlt=50&wid=650&cvt=jpeg",
            title: "fotelis chair",
            price: 55
        },
        {
            image: "https://images-na.ssl-images-amazon.com/images/I/41Jgo7WjH1L.jpg",
            title: "Boss chair",
            price: 128
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Set_of_fourteen_side_chairs_MET_DP110780.jpg/220px-Set_of_fourteen_side_chairs_MET_DP110780.jpg",
            title: "king chair",
            price: 88.25
        },
    ]

    const [getStatus, setStatus] = useState(1)
    const [getIndex, setIndex] = useState([])
    const [getAddProductsArr, setAddProductsArr] = useState([])
    const [getIndexCart, setIndexCart] = useState(0)
    let sum = 0;
    let prod = [{
        image: "",
        title: "",
        price: 0,
        quantity: 0
    }]

    function navFunction(index) {
        console.log(index);
        setStatus(index);
    }

    function addProduct(i) {
        console.log(i)
        console.log(products[i].title)
        if (!getIndex.includes(i)) {
            prod = {
                image: products[i].image,
                title: products[i].title,
                price: products[i].price,
                index: i,
                quantity: 1
            }
            setAddProductsArr([...getAddProductsArr, prod]);
        } else {
            for (let j = 0; j < getAddProductsArr.length; j++) {
                if (products[i].title === getAddProductsArr[j].title) {
                    getAddProductsArr[j].quantity++;
                }
            }

        }
        setIndex([...getIndex, i]);
    }

    function addOrRemove(index, symbol) {
        if (symbol === "+") {
            const newArray = getAddProductsArr;
            const get = getIndex;
            getAddProductsArr[index].quantity++;
            setAddProductsArr([...newArray])
            setIndex([...get, index]);
        } else {
            const newArray = getAddProductsArr;
            if (getAddProductsArr[index].quantity > 1) {
                getAddProductsArr[index].quantity--;
               // for (let i = 0; i < getAddProductsArr.length; i++) {
                    const arr = getIndex;
                    console.log(arr, "all")
                    const newIndex = arr.indexOf(getAddProductsArr[index].index);
                    console.log(newIndex,"indeksasasasa")
                    arr.splice(newIndex, 1);
                    setIndex([...arr])
              //  }
                setAddProductsArr([...newArray]);
            } else {

               // for (let i = 0; i < getAddProductsArr.length; i++) {
                    const arr = getIndex;
                    const newIndex = arr.indexOf(getAddProductsArr[index].index);
                    arr.splice(newIndex, 1);
                    setIndex([...arr])
                newArray.splice(index, 1);
                setAddProductsArr([...newArray])
               // }
            }
        }
    }


    return (
        <div className="App">
            <Toolbar navigation={navFunction} index={getAddProductsArr}/>
            {getStatus === 1 && <Home/>}
            {getStatus === 2 && <Gallery products={products} addProduct={addProduct}/>}
            {getStatus === 3 &&
            <Cart arrProducts={getAddProductsArr} addOrRemove={addOrRemove}/>}
        </div>
    );
}

export default App;
