import React from "react"
import "./styles.css"

const Piano = () => {
  const playNote = (e) => {
    const number = e.target.id
  }

  return (
    <div id="piano">
      <div className="keys">
        <div className="black-keys">
          <div id="34" className="key black-key" onClick={playNote}></div>
          <div id="36" className="key black-key" onClick={playNote}></div>
          <div id="38" className="key black-key" onClick={playNote}></div>
          <div id="41" className="key black-key" onClick={playNote}></div>
          <div id="43" className="key black-key" onClick={playNote}></div>
          <div id="46" className="key black-key" onClick={playNote}></div>
          <div id="48" className="key black-key" onClick={playNote}></div>
          <div id="50" className="key black-key" onClick={playNote}></div>
          <div id="53" className="key black-key" onClick={playNote}></div>
          <div id="55" className="key black-key" onClick={playNote}></div>
        </div>

        <div className="white-keys">
          <div id="33" className="key white-key" onClick={playNote}></div>
          <div id="35" className="key white-key" onClick={playNote}></div>
          <div id="37" className="key white-key" onClick={playNote}></div>
          <div id="39" className="key white-key" onClick={playNote}></div>
          <div id="40" className="key white-key" onClick={playNote}>
            <div className="green sticker">C</div>
          </div>
          <div id="42" className="key white-key" onClick={playNote}>
            <div className="pink sticker">D</div>
          </div>
          <div id="44" className="key white-key" onClick={playNote}>
            <div className="orange sticker">E</div>
          </div>
          <div id="45" className="key white-key" onClick={playNote}>
            <div className="purple sticker">F</div>
          </div>
          <div id="47" className="key white-key" onClick={playNote}>
            <div className="yellow sticker">G</div>
          </div>
          <div id="49" className="key white-key" onClick={playNote}>
            <div className="blue sticker">A</div>
          </div>
          <div id="51" className="key white-key" onClick={playNote}>
            <div className="tan sticker">B</div>
          </div>
          <div id="52" className="key white-key" onClick={playNote}>
            <div className="green sticker">C</div>
          </div>
          <div id="54" className="key white-key" onClick={playNote}></div>
          <div id="56" className="key white-key" onClick={playNote}></div>
          <div id="57" className="key white-key" onClick={playNote}></div>
        </div>
      </div>
    </div>
  )
}

export default Piano
