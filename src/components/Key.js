import "./Key.css"

const Key = ({ id, className, stickerClassName, stickerText }) => {
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
    <div id={id} className={className} onMouseDown={playNote}>
      <div className={stickerClassName} onMouseDown={playNoteSticker}>
        {stickerText}
      </div>
    </div>
  )
}

export default Key
