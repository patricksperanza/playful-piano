import { useState } from "react"
import Sidebar from "./Sidebar"
import Song from "./Song"
import Piano from "./Piano"

function Root() {
  const [title, setTitle] = useState("Hot Cross Buns")
  const [sidebar, setSidebar] = useState(false)

  const show = () => {
    setSidebar(!sidebar)
  }

  const changeTitle = (newTitle) => {
    setTitle(newTitle)
  }

  return (
    <div className="Root">
      <Song sidebar={sidebar} showSidebar={show} title={title} />
      <Sidebar
        sidebar={sidebar}
        changeTitle={changeTitle}
        setSidebar={setSidebar}
      />
      <Piano />
    </div>
  )
}

export default Root
