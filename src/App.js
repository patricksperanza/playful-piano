import { useState } from "react"
import Header from "./components/Header/Header"
import Piano from "./components/Piano/Piano"
import Music from "./components/Music/Music"
import Navbar from "./components/Navbar/Navbar"
import SettingsBar from "./components/SettingsBar/SettingsBars"
import "./styles.css"

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
        <Navbar changeTitle={changeTitle} />
        <div className="song">
          <Music title={title} />
          <Piano />
        </div>
        <SettingsBar />
      </div>
    </div>
  )
}

export default App
