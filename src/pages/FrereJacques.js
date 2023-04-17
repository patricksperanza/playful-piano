import EighthMeasure from "../components/EighthMeasure"
import { data } from "./sheetMusicData"

const FrereJacques = () => {
  const song = data.frereJacques
  return (
    <div className="sheet">
      <div className="row">
        <EighthMeasure notes={song[0]} />
      </div>
      <div className="row">
        <EighthMeasure notes={song[1]} />
      </div>
      <div className="row">
        <EighthMeasure notes={song[2]} />
      </div>
      <div className="row">
        <EighthMeasure notes={song[3]} />
      </div>
      <div className="row">
        <EighthMeasure notes={song[4]} />
      </div>
      <div className="row">
        <EighthMeasure notes={song[5]} />
      </div>
      <div className="row">
        <EighthMeasure notes={song[6]} />
      </div>
      <div className="row">
        <EighthMeasure notes={song[7]} />
      </div>
    </div>
  )
}

export default FrereJacques
