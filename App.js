import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import dataArray from "./data"


export default function App() {
    const cardsArray = dataArray.map(x => {
        return (
            <Card 
                key={x.key}
                {...x}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <div className="cards--container">
                {cardsArray}
            </div>
        </div>
    )
}

