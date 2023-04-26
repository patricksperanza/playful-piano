import "./Sidebar.css"
import { Link } from "react-router-dom"

const Sidebar = ({ sidebar, changeTitle, setSidebar }) => {
  return (
    <div className={sidebar ? "sidebar active" : "sidebar"}>
      <ul className="sidebar-list">
        <Link to="/">
          <li
            onClick={() => {
              changeTitle("Hot Cross Buns")
              setSidebar(false)
            }}
          >
            Hot Cross Buns
          </li>
        </Link>
        <Link to="/rolling">
          <li
            onClick={() => {
              changeTitle("Rolling Along")
              setSidebar(false)
            }}
          >
            Rolling Along
          </li>
        </Link>
        <Link to="/twinkle">
          <li
            onClick={() => {
              changeTitle("Twinkle Twinkle")
              setSidebar(false)
            }}
          >
            Twinkle Twinkle
          </li>
        </Link>
        <Link to="/frere">
          <li
            onClick={() => {
              changeTitle("Frere Jacques")
              setSidebar(false)
            }}
          >
            Frere Jacques
          </li>
        </Link>
        <Link to="/ode">
          <li
            onClick={() => {
              changeTitle("Ode to Joy")
              setSidebar(false)
            }}
          >
            Ode to Joy
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar
