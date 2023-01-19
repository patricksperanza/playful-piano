import React from "react"

import Sheet from "../Sheet/Sheet"
import "./Music.css"

const Music = ({ title }) => {
  return (
    <div className="container">
      <Sheet title={title} />
    </div>
  )
}

export default Music
