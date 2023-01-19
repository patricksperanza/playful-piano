import React from "react"
import "./Measure.css"

const Measure = ({ notes }) => {
  return (
    <div className="measure">
      <div className={`${notes[0]} eighth-sticker`}></div>
      <div className={`${notes[1]} eighth-sticker`}></div>
      <div className={`${notes[2]} eighth-sticker`}></div>
      <div className={`${notes[3]} eighth-sticker`}></div>
      <div className={`${notes[4]} eighth-sticker`}></div>
      <div className={`${notes[5]} eighth-sticker`}></div>
      <div className={`${notes[6]} eighth-sticker`}></div>
      <div className={`${notes[7]} eighth-sticker`}></div>
    </div>
  )
}

export default Measure
