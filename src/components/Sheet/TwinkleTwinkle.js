import React from "react"
import Measure from "../Measure/Measure"

const TwinkleTwinkle = () => {
  return (
    <div>
      <div className="row">
        <Measure notes={["green", "green", "yellow", "yellow"]} />
        <div className="barline"></div>
        <Measure notes={["blue", "blue", "yellow", ""]} />
      </div>
      <div className="row">
        <Measure notes={["purple", "purple", "orange", "orange"]} />
        <div className="barline"></div>
        <Measure notes={["pink", "pink", "green", ""]} />
      </div>
      <div className="row">
        <Measure notes={["yellow", "yellow", "purple", "purple"]} />
        <div className="barline"></div>
        <Measure notes={["orange", "orange", "pink", ""]} />
      </div>
      <div className="row">
        <Measure notes={["yellow", "yellow", "purple", "purple"]} />
        <div className="barline"></div>
        <Measure notes={["orange", "orange", "pink", ""]} />
      </div>
      <div className="row">
        <Measure notes={["green", "green", "yellow", "yellow"]} />
        <div className="barline"></div>
        <Measure notes={["blue", "blue", "yellow", ""]} />
      </div>
      <div className="row">
        <Measure notes={["purple", "purple", "orange", "orange"]} />
        <div className="barline"></div>
        <Measure notes={["pink", "pink", "green", ""]} />
      </div>
    </div>
  )
}

export default TwinkleTwinkle
