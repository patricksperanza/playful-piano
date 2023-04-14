import { useState } from "react"
import Sidebar from "./components/Sidebar/Sidebar"
import Song from "./components/Song/Song"
import Piano from "./components/Piano/Piano"
import "./App.css"

function App() {
  const [title, setTitle] = useState("hot-cross-buns.png")
  const [sidebar, setSidebar] = useState(false)

  const show = () => {
    setSidebar(!sidebar)
  }

  const changeTitle = (newTitle) => {
    setTitle(newTitle)
  }
  return (
    <div className="App">
      <Song sidebar={sidebar} showSidebar={show} title={title} />
      <Sidebar sidebar={sidebar} changeTitle={changeTitle} />
      <Piano />
    </div>
  )
}

export default App
