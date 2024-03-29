import React from "react"
import QuarterMeasure from "../components/QuarterMeasure"
import { data } from "./sheetMusicData"
import "./SheetMusic.css"

const HotCrossBuns = () => {
  const song = data.hotCrossBuns
  return (
    <div className="sheet">
      <div className="row">
        <QuarterMeasure notes={song[0]} />
        <div className="barline"></div>
        <QuarterMeasure notes={song[1]} />
      </div>
      <div className="row">
        <QuarterMeasure notes={song[2]} />
        <div className="barline"></div>
        <QuarterMeasure notes={song[3]} />
      </div>
      <div className="row">
        <QuarterMeasure notes={song[4]} />
        <div className="barline"></div>
        <QuarterMeasure notes={song[5]} />
      </div>
      <div className="row">
        <QuarterMeasure notes={song[6]} />
        <div className="barline"></div>
        <QuarterMeasure notes={song[7]} className="end" />
      </div>
    </div>
  )
}

export default HotCrossBuns
