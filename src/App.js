import { useState } from "react"
import Header from "./components/Header/Header"
import Piano from "./components/Piano/Piano"

import Music from "./components/Music/Music"

import "./App.css"

function App() {
  const [title, setTitle] = useState({
    name: "HotCrossBuns",
    src: "hot-cross-buns.png",
  })

  const changeTitle = (newTitle) => {
    setTitle(newTitle)
  }
  return (
    <div className="App">
      <Header title={title} />
      <div className="main">
        <div className="song">
          <Music title={title} />
          <Piano />
        </div>
      </div>
    </div>
  )
}

export default App
