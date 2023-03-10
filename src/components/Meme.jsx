import React from "react";
import memesData from '../memesData'

function Meme(){

    const [Meme, setMeme] = React.useState("");

    function onClickHandler(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
        setMeme(url)
    }

    return(
    <main>
        <div className="meme--form">
            <input type="text" className="input--control" placeholder="Shut Up"/>
            <input type="text" className="input--control" placeholder="and take my money"/>
            <button onClick={onClickHandler} className="form--button">
                Get a new meme image 🖼
            </button>
        </div>
        <img src={Meme} alt="Generated Meme Image" />
    </main>  
    )
}

export default Meme