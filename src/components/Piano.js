import "./Piano.css"

const Piano = () => {
  const playNote = (e) => {
    const number = e.target.id
    const noteAudio = new Audio(`./pianoSamples/key${number}.mp3`)
    noteAudio.play()
  }

  const playNoteSticker = (e) => {
    const number = e.target.parentNode.id
    const noteAudio = new Audio(`./pianoSamples/key${number}.mp3`)
    noteAudio.play()
  }

  return (
    <div id="piano" className="piano">
      <div className="keys">
        <div className="black-keys">
          <div id="34" className="key black-key" onMouseDown={playNote}></div>
          <div id="36" className="key black-key" onMouseDown={playNote}></div>
          <div id="38" className="key black-key" onMouseDown={playNote}></div>
          <div id="41" className="key black-key" onMouseDown={playNote}></div>
          <div id="43" className="key black-key" onMouseDown={playNote}></div>
          <div id="46" className="key black-key" onMouseDown={playNote}></div>
          <div id="48" className="key black-key" onMouseDown={playNote}></div>
          <div id="50" className="key black-key" onMouseDown={playNote}></div>
          <div id="53" className="key black-key" onMouseDown={playNote}></div>
          <div id="55" className="key black-key" onMouseDown={playNote}></div>
        </div>

        <div className="white-keys">
          <div id="33" className="key white-key" onMouseDown={playNote}></div>
          <div id="35" className="key white-key" onMouseDown={playNote}></div>
          <div id="37" className="key white-key" onMouseDown={playNote}></div>
          <div id="39" className="key white-key" onMouseDown={playNote}></div>
          <div id="40" className="key white-key" onMouseDown={playNote}>
            <div className="green sticker" onMouseDown={playNoteSticker}>
              C
            </div>
          </div>
          <div id="42" className="key white-key" onMouseDown={playNote}>
            <div className="pink sticker" onMouseDown={playNoteSticker}>
              D
            </div>
          </div>
          <div id="44" className="key white-key" onMouseDown={playNote}>
            <div className="orange sticker" onMouseDown={playNoteSticker}>
              E
            </div>
          </div>
          <div id="45" className="key white-key" onMouseDown={playNote}>
            <div className="purple sticker" onMouseDown={playNoteSticker}>
              F
            </div>
          </div>
          <div id="47" className="key white-key" onMouseDown={playNote}>
            <div className="yellow sticker" onMouseDown={playNoteSticker}>
              G
            </div>
          </div>
          <div id="49" className="key white-key" onMouseDown={playNote}>
            <div className="blue sticker" onMouseDown={playNoteSticker}>
              A
            </div>
          </div>
          <div id="51" className="key white-key" onMouseDown={playNote}>
            <div className="tan sticker" onMouseDown={playNoteSticker}>
              B
            </div>
          </div>
          <div id="52" className="key white-key" onMouseDown={playNote}>
            <div className="green sticker" onMouseDown={playNoteSticker}>
              C
            </div>
          </div>
          <div id="54" className="key white-key" onMouseDown={playNote}></div>
          <div id="56" className="key white-key" onMouseDown={playNote}></div>
          <div id="57" className="key white-key" onMouseDown={playNote}></div>
        </div>
      </div>
    </div>
  )
}

export default Piano
