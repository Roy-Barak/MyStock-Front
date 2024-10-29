// src/App.js
import React, {useEffect, useState} from 'react';
import Home from "./pages/home/home"
import Navbar from "./components/navbar/navbar"
import {Route, Routes, useNavigate,} from "react-router-dom";
import About from "./pages/about/about";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/footer"
import LoginAndRegister from "./pages/login/loginAndRegister/LoginAndRegister";
import Dashboard from "./pages/dashBoard/dashBoard";


function App() {
    const navigate = useNavigate();
    const [user, setUser] = useState(localStorage.getItem("userName"));
    const fetchUser = async () => {
        console.log("try to fetch")
        try {
            const response = await fetch("${backEndUrl}/user/data", {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                console.log("Failed to fetch user data");
                handleUser('');
                localStorage.removeItem("userName")
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    useEffect(() => {
        // Fetch user data immediately on mount
        fetchUser();

        // Set an interval to check the token every minute
        const interval = setInterval(() => {

            if (localStorage.getItem("userName")) {
                fetchUser();
            }
        }, 120000); // 60,000 milliseconds = 1 minute

        // Clear the interval on component unmount
        return () => clearInterval(interval);
    },);

    function handleUser(user) {
        setUser(user)
    }

    return (
        <div>

            <Navbar user={user} handleUser={handleUser}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
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
