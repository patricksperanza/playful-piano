import "./Piano.css"

import Key from "./Key"

const Piano = () => {
  const map = {
    a: 40,
    w: 41,
    s: 42,
    e: 43,
    d: 44,
    f: 45,
    t: 46,
    g: 47,
    y: 48,
    h: 49,
    u: 50,
    j: 51,
    k: 52,
  }
  const playNoteFromKey = (e) => {
    if (e.repeat) return
    if (map[e.key]) {
      const noteAudio = new Audio(`./pianoSamples/key${map[e.key]}.mp3`)
      noteAudio.play()
    }
  }

  window.addEventListener("keydown", (e) => {
    playNoteFromKey(e)
  })

  return (
    <div id="piano" className="piano">
      <div className="keys">
        <div className="black-keys">
          <Key id="34" className="key black-key" />
          <Key id="36" className="key black-key" />
          <Key id="38" className="key black-key" />
          <Key id="41" className="key black-key" />
          <Key id="43" className="key black-key" />
          <Key id="46" className="key black-key" />
          <Key id="48" className="key black-key" />
          <Key id="50" className="key black-key" />
          <Key id="53" className="key black-key" />
          <Key id="55" className="key black-key" />
        </div>

        <div className="white-keys">
          <Key id="33" className="key white-key" />
          <Key id="35" className="key white-key" />
          <Key id="37" className="key white-key" />
          <Key id="39" className="key white-key" />
          <Key
            id="40"
            className="key white-key"
            stickerClassName="green sticker"
            stickerText="C"
          />
          <Key
            id="42"
            className="key white-key"
            stickerClassName="pink sticker"
            stickerText="D"
          />
          <Key
            id="44"
            className="key white-key"
            stickerClassName="orange sticker"
            stickerText="E"
          />
          <Key
            id="45"
            className="key white-key"
            stickerClassName="purple sticker"
            stickerText="F"
          />
          <Key
            id="47"
            className="key white-key"
            stickerClassName="yellow sticker"
            stickerText="G"
          />
          <Key
            id="49"
            className="key white-key"
            stickerClassName="blue sticker"
            stickerText="A"
          />
          <Key
            id="51"
            className="key white-key"
            stickerClassName="tan sticker"
            stickerText="B"
          />
          <Key
            id="52"
            className="key white-key"
            stickerClassName="green sticker"
            stickerText="C"
          />
          <Key id="54" className="key white-key" />
          <Key id="56" className="key white-key" />
        </div>
      </div>
    </div>
  )
}

export default Piano
