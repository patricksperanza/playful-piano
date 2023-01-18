import Header from "./components/Header/Header"
import Piano from "./components/Piano/Piano"
import Music from "./components/Music/Music"
import Navbar from "./components/Navbar/Navbar"
import SettingsBar from "./components/SettingsBar/SettingsBars"
import "./styles.css"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Navbar />
        <div className="song">
          <Music />
          <Piano />
        </div>
        <SettingsBar />
      </div>
    </div>
  )
}

export default App
