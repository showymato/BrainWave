import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from "../../assets/logo.png";
// import cross from "../../assets/cross.jpg";
import menu from "../../assets/menu.jpg";
import emergencyLogo from "../../assets/emergencyLogo.png";

export const navLinks = [
    { id: "/", title: "Home" },
    { id: "/drones", title: "Drones" },
    { id: "/weather_forecast", title: "Weather Forecast" },
    { id: "/organisations", title: "Organisations" },
    { id: "/admin_panel", title: "Admin Panel" },
];

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full flex items-center sticky top-0 z-20 bg-white px-10 border-b shadow-md">
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                {/* Menu Toggle */}
                <div className="block">
                    <img
                        src={menu}
                        alt="menu"
                        className="w-7 h-7 cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />

                    {/* Offcanvas Menu */}
                    <div
                        className={`fixed top-0 left-0 h-full w-64 bg-white z-30 transition-transform duration-300 ease-in-out ${
                            toggle ? 'translate-x-0' : '-translate-x-full'
                        }`}
                    >
                        <ul className="flex flex-col p-6 space-y-4 mt-16">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`${
                                        active === nav.title ? 'text-blue-600' : 'text-black'
                                    } hover:text-blue-600 text-lg font-medium cursor-pointer`}
                                    onClick={() => {
                                        setToggle(false);
                                        setActive(nav.title);
                                    }}
                                >
                                    <Link to={nav.id}>{nav.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Overlay */}
                    {toggle && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-20"
                            onClick={() => setToggle(false)}
                        />
                    )}
                </div>

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link
                        to="/"
                        className="flex items-center gap-2"
                        onClick={() => {
                            setActive('');
                            window.scroll(0, 0);
                        }}
                    >
                        <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
                        <p className="text-2xl font-bold" style={{ color: "#4B61D1" }}>
                            MedDrone X
                        </p>
                    </Link>
                </div>

                {/* Emergency Logo */}
                <div className="hidden sm:flex items-center">
                    <Link to="/requestType">
                        <img src={emergencyLogo} alt="emergency logo" className="w-16 h-16 object-contain" />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
