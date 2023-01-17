import React from "react"
import Title from "../Title/Title"
import "./styles.css"
import logo from "./cover.png"

const Header = () => {
  return (
    <header>
      <img src={logo} alt="piano" className="logo" />
      <Title className="title" />
      <div className="login">Login</div>
    </header>
  )
}

export default Header
