import "./Sidebar.css"
import { Link } from "react-router-dom"

const Sidebar = ({ sidebar, changeTitle }) => {
  return (
    <div className={sidebar ? "sidebar active" : "sidebar"}>
      <ul className="sidebar-list">
        <Link to="/">
          <li onClick={() => changeTitle("Hot Cross Buns")}>Hot Cross Buns</li>
        </Link>
        <Link to="/rolling">
          <li onClick={() => changeTitle("Rolling Along")}>Rolling Along</li>
        </Link>
        <Link to="/twinkle">
          <li onClick={() => changeTitle("Twinkle Twinkle")}>
            Twinkle Twinkle
          </li>
        </Link>
        <Link to="/frere">
          <li onClick={() => changeTitle("Frere Jacques")}>Frere Jacques</li>
        </Link>
        <Link to="/ode">
          <li onClick={() => changeTitle("Ode to Joy")}>Ode to Joy</li>
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar
