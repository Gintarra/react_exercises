import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar";
import CreatePostPage from "./Pages/CreatePostPage";
import AllPostsPage from "./Pages/AllPostsPage";
import {useEffect, useState} from "react";
import EditPage from "./Pages/EditPage";


// Post should have these fields
// title (min length 10, max 100, required)
// image (should include http - check if link, required)
// description (min length 20, max length 200, required)
// height - (numbers. max length 3, required)
// width - (numbers, max length 3, required)
// color - (should be string not longer than 20symbols, required)
// border radius - (numbers, max 2, required)
// id - (unique number which is generated automatically when post is created)


function App() {
    const [getPost, setPost] = useState([]);

    function getData(arr) {
        let index = 0;
        console.log(arr, arr.id)
        console.log(getPost)
        if (!!getPost) {
            setPost([...getPost, arr]);
        }
        for (let i = 0; i < getPost.length; i++) {
            if (getPost[i].id === arr.id) {
                const updateData = getPost;
                updateData.splice(i, 1, arr);
                console.log(updateData, "new variable")
                setPost([...updateData]);
                break;
            } else {
                console.log("else")
                setPost([...getPost, arr]);
            }
        }
    }

    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <Routes>

                    <Route path="/" element={<HomePage/>}>
                    </Route>
                    <Route path="/create-post"  element={<CreatePostPage sendData={getData}/>}>
                    </Route>
                    <Route path="/all-posts" element={<AllPostsPage posts={getPost}/>}>
                    </Route>
                    <Route path="/edit-post/:id" element={<EditPage posts={getPost} sendData={getData}/>}>
                    </Route>


                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
