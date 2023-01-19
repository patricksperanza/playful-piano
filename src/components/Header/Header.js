import React from "react"
import Title from "../Title/Title"
import "./Header.css"
import logo from "./cover.png"

const Header = ({ title }) => {
  return (
    <header>
      <img src={logo} alt="piano" className="logo" />
      <Title className="title" title={title} />
      <div className="login">Login</div>
    </header>
  )
}

export default Header
