import React from "react";
import Header from "./Header"
import Form from "./Form"
import "../styles/App.css"

export default function App(){
  return(
    <div className="page--container">
      <Header />
      <Form />
    </div>
  )
}