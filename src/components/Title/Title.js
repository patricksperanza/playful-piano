import React from "react"
import "./Title.css"
import Hot from "../../assets/hot-cross-buns.png"

const Title = ({ title }) => {
  return (
    <div>
      <img
        className="title-image"
        src={require(`../../assets/${title}`)}
        alt="title"
      />
    </div>
  )
}

export default Title
