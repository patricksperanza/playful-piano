import "./Sidebar.css"
import { Link } from "react-router-dom"

const Sidebar = ({ sidebar, changeTitle }) => {
  return (
    <div className={sidebar ? "sidebar active" : "sidebar"}>
      <ul className="sidebar-list">
        <Link to="/">
          <li onClick={() => changeTitle("hot-cross-buns.png")}>
            Hot Cross Buns
          </li>
        </Link>
        <Link to="/rolling">
          <li onClick={() => changeTitle("rolling-along.png")}>
            Rolling Along
          </li>
        </Link>
        <Link to="/twinkle">
          <li onClick={() => changeTitle("twinkle-twinkle.png")}>
            Twinkle Twinkle
          </li>
        </Link>
        <Link to="/frere">
          <li onClick={() => changeTitle("frere-jacques.png")}>
            Frere Jacques
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar
