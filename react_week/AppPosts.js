import React, {useState} from 'react';
import './App.css';
import AllPosts from "./componentsPosts/AllPosts";
import OnePost from "./componentsPosts/onePost";
import OneUserPosts from "./componentsPosts/OneUserPosts";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const AppPosts = () => {

    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route path="/userposts/:username" element={<OneUserPosts/>}/>
                    <Route path="/" element={<AllPosts/>}/>
                    <Route path="/userposts/:username/:id" element={<OnePost/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppPosts;