import React from "react"
import Title from "../Title/Title"
import "./Header.css"
import logo from "./cover.png"
import { FaBars } from "react-icons/fa"
import { MdOutlinePiano } from "react-icons/md"
import { IoMdClose } from "react-icons/io"

const Header = ({ title, sidebar, showSidebar }) => {
  return (
    <header className="header">
      {!sidebar && <FaBars className="header-icon" onClick={showSidebar} />}
      {sidebar && <IoMdClose className="header-icon" onClick={showSidebar} />}
      <Title className="header-title" title={title} />
      <MdOutlinePiano className="header-piano" />
    </header>
  )
}

export default Header
