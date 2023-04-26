import React from "react"
import Title from "./Title"
import { FaBars } from "react-icons/fa"
import { FiSettings } from "react-icons/fi"
import { IoMdClose } from "react-icons/io"
import "./Header.css"

const Header = ({ title, sidebar, showSidebar }) => {
  return (
    <header className="header">
      {!sidebar && <FaBars className="header-icon" onClick={showSidebar} />}
      {sidebar && <IoMdClose className="header-icon" onClick={showSidebar} />}
      <Title title={title} />
      <div className="header-settings"></div>
    </header>
  )
}

export default Header
