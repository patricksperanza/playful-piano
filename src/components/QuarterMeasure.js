import React from "react"
import "./Measure.css"

const Measure = ({ notes, className }) => {
  return (
    <div className={`measure ${className}`}>
      <div className={`${notes[0]} quarter-sticker`}></div>
      <div className={`${notes[1]} quarter-sticker`}></div>
      <div className={`${notes[2]} quarter-sticker`}></div>
      <div className={`${notes[3]} quarter-sticker`}></div>
    </div>
  )
}

export default Measure
