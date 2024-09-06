import React from "react"
import './App.css'
import { Outlet } from "react-router-dom"
import Navbar from "./components/Header/Navbar"
import Footer from "./components/Home/Footer"


function App() {

  return (
    <div className="" data-theme="light">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
