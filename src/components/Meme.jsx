import React from "react";

function Meme(){
    return(
    <main>
        <form className="meme--form">
            <input type="text" className="input--control" placeholder="Shut Up"/>
            <input type="text" className="input--control" placeholder="and take my money"/>
            <button className="form--button">
                Get a new meme image 🖼
            </button>
        </form>
    </main>  
    )
}

export default Meme