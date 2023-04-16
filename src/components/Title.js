import React from "react"
import "./Title.css"

const Title = ({ title }) => {
  return (
    <div>
      <img
        className="title-image"
        src={require(`../assets/${title}`)}
        alt="title"
      />
    </div>
  )
}

export default Title
