import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import "./Song.css"

const Song = ({ sidebar, showSidebar, title }) => {
  return (
    <div>
      <Header sidebar={sidebar} showSidebar={showSidebar} title={title} />
      <Outlet />
    </div>
  )
}

export default Song
