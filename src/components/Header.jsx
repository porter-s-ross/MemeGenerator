import React from "react";
import trollFace from "../assets/troll-face.png"

function Header(){
    return(
        <header className="header">
            <img src={trollFace} alt="Troll Face" className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project</h4>
        </header>
    )
}

export default Header