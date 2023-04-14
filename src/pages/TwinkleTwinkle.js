import { data } from "./sheetMusicData"
import QuarterMeasure from ".././components/Measure/QuarterMeasure"

const TwinkleTwinkle = () => {
  const song = data.twinkleTwinkle
  return (
    <div>
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
        <QuarterMeasure notes={song[7]} />
      </div>
      <div className="row">
        <QuarterMeasure notes={song[8]} />
        <div className="barline"></div>
        <QuarterMeasure notes={song[9]} />
      </div>
      <div className="row">
        <QuarterMeasure notes={song[10]} />
        <div className="barline"></div>
        <QuarterMeasure notes={song[11]} />
      </div>
    </div>
  )
}

export default TwinkleTwinkle
