import React from "react"
import QuarterMeasure from "../Measure/QuarterMeasure"

const HotCrossBuns = () => {
  return (
    <div>
      <div className="row">
        <QuarterMeasure notes={["orange", "", "pink", ""]} />
        <div className="barline"></div>
        <QuarterMeasure notes={["green", "", "", ""]} />
      </div>
      <div className="row">
        <QuarterMeasure notes={["orange", "", "pink", ""]} />
        <div className="barline"></div>
        <QuarterMeasure notes={["green", "", "", ""]} />
      </div>
      <div className="row">
        <QuarterMeasure notes={["green", "green", "green", "green"]} />
        <div className="barline"></div>
        <QuarterMeasure notes={["pink", "pink", "pink", "pink"]} />
      </div>
      <div className="row">
        <QuarterMeasure notes={["orange", "", "pink", ""]} />
        <div className="barline"></div>
        <QuarterMeasure notes={["green", "", "", ""]} />
      </div>
    </div>
  )
}

export default HotCrossBuns
