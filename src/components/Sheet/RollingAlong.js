import React from "react"
import QuarterMeasure from "../Measure/QuarterMeasure"

const RollingAlong = () => {
  return (
    <div>
      <div className="row">
        <QuarterMeasure notes={["orange", "pink", "green", "pink"]} />
        <div className="barline"></div>
        <QuarterMeasure notes={["orange", "orange", "orange", ""]} />
      </div>
      <div className="row">
        <QuarterMeasure notes={["pink", "pink", "pink", ""]} />
        <div className="barline"></div>
        <QuarterMeasure notes={["orange", "orange", "orange", ""]} />
      </div>
      <div className="row">
        <QuarterMeasure notes={["orange", "pink", "green", "pink"]} />
        <div className="barline"></div>
        <QuarterMeasure notes={["orange", "orange", "orange", "orange"]} />
      </div>
      <div className="row">
        <QuarterMeasure notes={["pink", "pink", "orange", "pink"]} />
        <div className="barline"></div>
        <QuarterMeasure notes={["green", "", "", ""]} />
      </div>
    </div>
  )
}

export default RollingAlong
