import React from "react"
import hotcrossbuns from "./images/hot-cross-buns.png"
import "./styles.css"

const Title = () => {
  return (
    <div>
      <img className="title-image" src={hotcrossbuns} alt="title" />
    </div>
  )
}

export default Title
