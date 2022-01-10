import './App.css';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ContactsPage from "./pages/ContactsPage";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Footer from "./Footer";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="d-flex">
                    <SideBar/>
                    <div className="grow4 d-flex column space-btw">
                        <NavBar/>
                        <Routes>
                            <Route path="/home" element={<HomePage/>}></Route>

                            <Route path="/gallery" element={<GalleryPage/>}></Route>

                            <Route path="/about" element={<AboutPage/>}></Route>

                            <Route path="/contacts" element={<ContactsPage/>}></Route>
                        </Routes>
                        <Footer/>
                    </div>
                </div>


            </BrowserRouter>
        </div>
    );
}

export default App;
