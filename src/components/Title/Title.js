import React from "react"
import "./Title.css"

const Title = ({ title }) => {
  return (
    <div>
      <img className="title-image" src={`./images/${title.src}`} alt="title" />
    </div>
  )
}

export default Title
