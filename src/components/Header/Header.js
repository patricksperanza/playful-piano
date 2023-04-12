import React from "react"
import Title from "../Title/Title"
import "./Header.css"
import logo from "./cover.png"
import { AiOutlineMenu } from "react-icons/ai"

const Header = ({ title }) => {
  return (
    <header className="header">
      {/* <AiOutlineMenu className="header-icon" /> */}
      <Title className="header-title" title={title} />
      {/* <img src={logo} alt="piano" className="header-logo" /> */}
    </header>
  )
}

export default Header
