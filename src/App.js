import Header from "./components/Header/Header"
import Piano from "./components/Piano/Piano"
import Music from "./components/Music/Music"
import "./styles.css"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Music />
        <Piano />
      </div>
    </div>
  )
}

export default App
