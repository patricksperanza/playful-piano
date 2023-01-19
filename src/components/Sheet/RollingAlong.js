import React from "react"
import Measure from "../Measure/Measure"

const RollingAlong = () => {
  return (
    <div>
      <div className="row">
        <Measure notes={["orange", "pink", "green", "pink"]} />
        <div className="barline"></div>
        <Measure notes={["orange", "orange", "orange", ""]} />
      </div>
      <div className="row">
        <Measure notes={["pink", "pink", "pink", ""]} />
        <div className="barline"></div>
        <Measure notes={["orange", "orange", "orange", ""]} />
      </div>
      <div className="row">
        <Measure notes={["orange", "pink", "green", "pink"]} />
        <div className="barline"></div>
        <Measure notes={["orange", "orange", "orange", "orange"]} />
      </div>
      <div className="row">
        <Measure notes={["pink", "pink", "orange", "pink"]} />
        <div className="barline"></div>
        <Measure notes={["green", "", "", ""]} />
      </div>
    </div>
  )
}

export default RollingAlong
