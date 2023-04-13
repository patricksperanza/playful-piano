import "./Sidebar.css"
import { Link } from "react-router-dom"

const Sidebar = ({ sidebar }) => {
  return (
    <div className={sidebar ? "sidebar active" : "sidebar"}>
      <ul className="sidebar-list">
        <Link to="/">
          <li>Hot Cross Buns</li>
        </Link>
        <Link to="/frere">
          <li>Frere Jacques</li>
        </Link>
        <Link to="/rolling">
          <li>Rolling Along</li>
        </Link>
        <Link to="/twinkle">
          <li>Twinkle Twinkle</li>
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar
