import React from "react"
import key33 from "./pianoSamples/key33.mp3"
import key34 from "./pianoSamples/key34.mp3"
import key35 from "./pianoSamples/key35.mp3"
import key36 from "./pianoSamples/key36.mp3"
import key37 from "./pianoSamples/key37.mp3"
import key38 from "./pianoSamples/key38.mp3"
import key39 from "./pianoSamples/key39.mp3"
import key40 from "./pianoSamples/key40.mp3"
import key41 from "./pianoSamples/key41.mp3"
import key42 from "./pianoSamples/key42.mp3"
import key43 from "./pianoSamples/key43.mp3"
import key44 from "./pianoSamples/key44.mp3"
import key45 from "./pianoSamples/key45.mp3"
import key46 from "./pianoSamples/key46.mp3"
import key47 from "./pianoSamples/key47.mp3"
import key48 from "./pianoSamples/key48.mp3"
import key49 from "./pianoSamples/key49.mp3"
import key50 from "./pianoSamples/key50.mp3"
import key51 from "./pianoSamples/key51.mp3"
import key52 from "./pianoSamples/key52.mp3"
import key53 from "./pianoSamples/key53.mp3"
import key54 from "./pianoSamples/key54.mp3"
import key55 from "./pianoSamples/key55.mp3"
import key56 from "./pianoSamples/key56.mp3"
import key57 from "./pianoSamples/key57.mp3"

import "./styles.css"

const noteMap = {
  key33,
  key34,
  key35,
  key36,
  key37,
  key38,
  key39,
  key40,
  key41,
  key42,
  key43,
  key44,
  key45,
  key46,
  key47,
  key48,
  key49,
  key50,
  key51,
  key52,
  key53,
  key54,
  key55,
  key56,
  key57,
}

const Piano = () => {
  const playNote = (e) => {
    const number = e.target.id
    const noteAudio = new Audio(noteMap[`key${number}`])
    noteAudio.play()
  }

  const playNoteSticker = (e) => {
    const number = e.target.parentNode.id
    const noteAudio = new Audio(noteMap[`key${number}`])
    noteAudio.play()
  }

  return (
    <div id="piano">
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
