// src/App.js
import React, {useState} from 'react';
import Home from "./pages/home/home"
import Navbar from "./components/navbar/navbar"
import {Route, Routes,} from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/footer"
import Register from "./pages/login/loginAndRegister/RegisterPage"
import LoginAndRegister from "./pages/login/loginAndRegister/LoginAndRegister";
import Dashboard from "./pages/dashBoard/dashBoard";



    function App() {
        const [user,setUser] = useState(localStorage.getItem("userName"));
        function handleUser(user){
            setUser(user)
        }
    return (
    <div>
    <Navbar user={user} handleUser={handleUser}/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/loginAndRegister" element={<LoginAndRegister handleUser={handleUser}/>}/>
    <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/dashboard" element={<Dashboard handleUser={handleUser}/>}/>
    </Routes>
        <Footer/>
    </div>

)
;

}

export default App;
