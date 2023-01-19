import React from "react"
import "./Measure.css"

const Measure = ({ notes }) => {
  return (
    <div className="measure">
      <div className={`${notes[0]} music-sticker`}></div>
      <div className={`${notes[1]} music-sticker`}></div>
      <div className={`${notes[2]} music-sticker`}></div>
      <div className={`${notes[3]} music-sticker`}></div>
    </div>
  )
}

export default Measure
