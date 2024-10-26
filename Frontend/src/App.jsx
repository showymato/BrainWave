import React from "react"
import './App.css'
import { Outlet } from "react-router-dom"
import Navbar from "./components/Header/Navbar"
import Footer from "./components/Home/Footer"
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Chatbot from "./components/Chatbot.jsx";
import './Chatbot.css'


function App() {
  return (
    <div className="" data-theme="light">
        <ErrorBoundary>
            <Navbar/>
            <Outlet/>
            <Footer/>
            <Chatbot />
        </ErrorBoundary>
    </div>
  )
}

export default App
