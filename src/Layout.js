import React from 'react';
import "./css/Layout.css";
import {Outlet,Link} from "react-router-dom"
export default function Layout() {
  return (
    <div>
        <nav>
            <ul className="nav-bar">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/service">Service</Link>
                </li>
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
                <li>
                    <Link to="/effect">Effect</Link>
                </li>
                <li>
                    <Link to="/reducer">Reducer</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}