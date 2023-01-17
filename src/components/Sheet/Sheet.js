import React from "react"
import Measure from "../../components/Measure/Measure"
import "./styles.css"

const Sheet = () => {
  return (
    <div className="sheet">
      <div className="row">
        <Measure notes={["orange", "", "pink", ""]} />
        <div className="barline"></div>
        <Measure notes={["green", "", "", ""]} />
      </div>
      <div className="row">
        <Measure notes={["orange", "", "pink", ""]} />
        <div className="barline"></div>
        <Measure notes={["green", "", "", ""]} />
      </div>
      <div className="row">
        <Measure notes={["green", "green", "green", "green"]} />
        <div className="barline"></div>
        <Measure notes={["pink", "pink", "pink", "pink"]} />
      </div>
      <div className="row">
        <Measure notes={["orange", "", "pink", ""]} />
        <div className="barline"></div>
        <Measure notes={["green", "", "", ""]} />
      </div>
    </div>
  )
}

export default Sheet
