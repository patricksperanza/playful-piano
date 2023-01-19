import React from "react"
import QuarterMeasure from "../Measure/QuarterMeasure"

const TwinkleTwinkle = () => {
  return (
    <div>
      <div className="row">
        <QuarterMeasure notes={["green", "green", "yellow", "yellow"]} />
        <div className="barline"></div>
        <QuarterMeasure notes={["blue", "blue", "yellow", ""]} />
      </div>
      <div className="row">
        <QuarterMeasure notes={["purple", "purple", "orange", "orange"]} />
        <div className="barline"></div>
        <QuarterMeasure notes={["pink", "pink", "green", ""]} />
      </div>
      <div className="row">
        <QuarterMeasure notes={["yellow", "yellow", "purple", "purple"]} />
        <div className="barline"></div>
        <QuarterMeasure notes={["orange", "orange", "pink", ""]} />
      </div>
      <div className="row">
        <QuarterMeasure notes={["yellow", "yellow", "purple", "purple"]} />
        <div className="barline"></div>
        <QuarterMeasure notes={["orange", "orange", "pink", ""]} />
      </div>
      <div className="row">
        <QuarterMeasure notes={["green", "green", "yellow", "yellow"]} />
        <div className="barline"></div>
        <QuarterMeasure notes={["blue", "blue", "yellow", ""]} />
      </div>
      <div className="row">
        <QuarterMeasure notes={["purple", "purple", "orange", "orange"]} />
        <div className="barline"></div>
        <QuarterMeasure notes={["pink", "pink", "green", ""]} />
      </div>
    </div>
  )
}

export default TwinkleTwinkle
