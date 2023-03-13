import React from "react";
import memesData from '../memesData'

function Meme(){

    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */


    const [Meme, setMeme] = React.useState({
        topText : "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevState=>{
            return(
                {
                    ...prevState,
                    randomImage : url
                }
            )
        })
        
    }

    return(
    <main>
        <div className="meme--form">
            <input type="text" className="input--control" placeholder="Shut Up"/>
            <input type="text" className="input--control" placeholder="and take my money"/>
            <button onClick={getMemeImage} className="form--button">
                Get a new meme image 🖼
            </button>
        </div>
        <img src={Meme.randomImage} alt="Generated Meme Image" />
    </main>  
    )
}

export default Meme