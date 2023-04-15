import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.scss"
const NavBar = () => {

    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/Component1">Component1</Link>
            <Link to="/Component2">Component2</Link>
        </div>
    )
}

export default NavBar