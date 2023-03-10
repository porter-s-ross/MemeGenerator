import React from "react";

function Header(){
    return(
        <header className="header">
            <img src="src/assets/troll-face.png" alt="Troll Face" className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project</h4>
        </header>
    )
}

export default Header