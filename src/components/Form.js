import React from "react";
import "../styles/Form.css"
import memesData from "../MemesData.js"

let ImageIcon= "/images/ImageIcon.png"
let memeUrl

export default function Form(){
  const [meme, setMeme] = React.useState({
    topText:"",
    bottomText:"",
    memeImage:"https://i.imgflip.com/261o3j.jpg"
  })

  console.log(meme)

  const [allMemeIamges, setAllMemeImages] = React.useState(memesData.data.memes)

  function getMemeImage(){

    
    let randomNum= Math.random();
    randomNum*=allMemeIamges.length
    let choosenNum= parseInt(randomNum)
    
    memeUrl=allMemeIamges[choosenNum].url
    setMeme(prevMeme => ({
      ...prevMeme,
      memeImage:memeUrl
    }) )
  }

  function handleChange(event){
    const {value, name} = event.target

    setMeme(prevMeme => ({

      ...prevMeme,
      [name] : value

    }))

  }


  return(
    <div className="form--container">

      <div className="inputs--container">

        <input 
         name="topText"
         onChange={handleChange}
         className="input--bar" 
         placeholder="Top Text" />
         

        <input 
        name="bottomText" 
        onChange={handleChange} 
        className="input--bar" 
        placeholder="Bottom Text" />
        

      </div>
        <button onClick={getMemeImage} className="submit--button"> 
          <div className="button--content">
            Get a new meme image 
            <img className="img--icon" alt="iconImage" src={ImageIcon}/> 
          </div>
          
        </button>
        <div className="meme--container">
          <img className="meme--image" alt="memeImage" src={meme.memeImage}/>
          <h2 className="meme--text top--text" >{meme.topText}</h2>
          <h2 className="meme--text bottom--text">{meme.bottomText}</h2>
        </div>
        
        
    </div>
  )
}