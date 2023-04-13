import { useState } from "react"
import Header from "./components/Header/Header"
import Piano from "./components/Piano/Piano"
import Sidebar from "./components/Sidebar/Sidebar"

import Music from "./components/Music/Music"

import "./App.css"

function App() {
  const [title, setTitle] = useState({
    name: "HotCrossBuns",
    src: "hot-cross-buns.png",
  })
  const [sidebar, setSidebar] = useState(false)

  const show = () => {
    setSidebar(!sidebar)
  }

  const changeTitle = (newTitle) => {
    setTitle(newTitle)
  }
  return (
    <div className="App">
      <Header sidebar={sidebar} showSidebar={show} title={title} />
      <Sidebar sidebar={sidebar} />
      <Music title={title} />
      <Piano />
    </div>
  )
}

export default App
