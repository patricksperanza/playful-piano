import "./Sidebar.css"

const Sidebar = ({ sidebar }) => {
  return (
    <div className={sidebar ? "sidebar active" : "sidebar"}>
      <ul className="sidebar-list">
        <li>Hot Cross Buns</li>
        <li>Frere Jacques</li>
        <li>Twinkle Twinkle</li>
        <li>Frere Jacques</li>
        <li>Rolling Along</li>
        <li>Ode to Joy</li>
        <li>Skip to My Lou</li>
      </ul>
    </div>
  )
}

export default Sidebar
