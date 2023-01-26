import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import './NavBar.css'

function NavBar() {
    return(
    <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/projects">My Projects</Link>
        </li>
        <li>
            <Link to="/resume">Resume</Link>
        </li>
        </ul>
    </nav>
    )
}

export default NavBar