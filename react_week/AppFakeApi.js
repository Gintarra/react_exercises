import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePageApi from "./pagesFakeApi/HomePageApi";
import Category from "./pagesFakeApi/Category";
import SingleProduct from "./pagesFakeApi/SingleProduct";

const AppFakeApi = () => {



    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<HomePageApi />}>
                    </Route>
                    <Route path="/category/:categoryName" element={<Category />}>
                    </Route>
                    <Route path="/singleProduct/:id" element={<SingleProduct/>}>
                    </Route>
                </Routes>

            </BrowserRouter>


        </div>
    );
};

export default AppFakeApi;