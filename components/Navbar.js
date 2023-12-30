import React from "react"


export default function Navbar() {
    return (
        <nav className="navbar--container">
            <img 
                src="./images/globe-icon.png" 
                className="navbar--icon" 
                alt="Globe icon."
            />
            <h1 className="navbar--title">My Travel Journal.</h1>
        </nav>
    )
}
