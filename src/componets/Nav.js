import React from "react"
import { Link } from "react-router-dom"


function Nav () {

    return(
    <>
        <Link to="/">Home</Link>
        <Link to="/Blog">Blog</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>

    </>
    )
}

export default Nav