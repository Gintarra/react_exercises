import React, {useEffect, useState} from 'react';
import './App.css';
import WriteReview from "./ComponentsUser/WriteReview";
import ShowReviews from "./ComponentsUser/ShowReviews";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";


const AppUserReview = () => {
    const [getReviews, setReviews] = useState([]);
    const [getAverage, setAverage] = useState(0)

    function getData(text, rate) {
        setReviews([...getReviews, {t: text, r: rate}])
        console.log(text)
        console.log(rate)


    }

    useEffect(() => {
        average();
    }, [getReviews])

    function average() {
        let allNum = 0;
        getReviews.map(x => allNum += Number(x.r))
        setAverage(allNum / getReviews.length)
        console.log(allNum / getReviews.length, "vidurkis")
    }

    return (
        <div>
            <BrowserRouter>
                <div className="d-flex justify-center" style={{margin: "20px"}}>
                    <div>
                        <div className="box d-flex column align-center space-ev">
                            <img className="userImg"
                                 src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5NjIyODM0ODM2ODc0Mzc3/dwayne-the-rock-johnson-gettyimages-1061959920.jpg"
                                 alt=""/>
                            <h2>Dwayne Johnson</h2>
                            <div>
                                <img className="stars"
                                     src={getAverage>= 1 ? "https://media.istockphoto.com/vectors/star-icon-vector-id1129712692?k=20&m=1129712692&s=612x612&w=0&h=LHyR3dyiTXewDgGh6HGL4Hvky1s4veeEkr3VE05N5ww=" :"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png"}
                                     alt=""/>
                                <img className="stars"
                                     src={getAverage>= 2 ? "https://media.istockphoto.com/vectors/star-icon-vector-id1129712692?k=20&m=1129712692&s=612x612&w=0&h=LHyR3dyiTXewDgGh6HGL4Hvky1s4veeEkr3VE05N5ww=" :"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png"}
                                     alt=""/>
                                <img className="stars"
                                     src={getAverage>= 3 ? "https://media.istockphoto.com/vectors/star-icon-vector-id1129712692?k=20&m=1129712692&s=612x612&w=0&h=LHyR3dyiTXewDgGh6HGL4Hvky1s4veeEkr3VE05N5ww=" :"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png"}
                                     alt=""/>
                                <img className="stars"
                                     src={getAverage>= 4 ? "https://media.istockphoto.com/vectors/star-icon-vector-id1129712692?k=20&m=1129712692&s=612x612&w=0&h=LHyR3dyiTXewDgGh6HGL4Hvky1s4veeEkr3VE05N5ww=" :"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png"}
                                     alt=""/>
                                <img className="stars"
                                     src={getAverage>= 5 ? "https://media.istockphoto.com/vectors/star-icon-vector-id1129712692?k=20&m=1129712692&s=612x612&w=0&h=LHyR3dyiTXewDgGh6HGL4Hvky1s4veeEkr3VE05N5ww=" :"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png"}
                                     alt=""/>

                            </div>
                            <div className="linkDiv">

                                <Link to="writeReview" style={{
                                    textDecoration: "none",
                                    backgroundColor: "grey",
                                    padding: "10px",
                                    marginRight: "10px",
                                    color: "black"
                                }}>Create review</Link>

                                <Link to="show_reviews" style={{
                                    textDecoration: "none",
                                    marginRight: "10px",
                                    backgroundColor: "grey",
                                    padding: "10px",
                                    color: "black"
                                }}>Show reviews</Link>

                            </div>
                        </div>
                    </div>
                    <div>
                        <Routes>
                            <Route path="/show_reviews" element={<ShowReviews allReviews={getReviews}/>}/>

                            <Route path="/writeReview" element={<WriteReview sendData={getData}/>}/>
                        </Routes>
                    </div>


                </div>
            </BrowserRouter>
        </div>
    );
};

export default AppUserReview;