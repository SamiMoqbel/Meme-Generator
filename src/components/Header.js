import React from "react";
import "../styles/Header.css"


let Logo = "/images/page-logo.png"

export default function Header(){
  return(
    <div className="navbar--container">
      <div className="logo--container">
        <img className="logo--img" src={Logo}/>
        <h1 className="page--title">Meme Generator</h1>
      </div>
      <h3>React Course - Project 3</h3>
      
    </div>
  )
}