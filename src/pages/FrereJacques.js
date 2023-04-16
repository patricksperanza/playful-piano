import EighthMeasure from "../components/EighthMeasure"

const FrereJacques = () => {
  return (
    <div>
      <div className="row">
        <EighthMeasure
          notes={["green", "", "pink", "", "orange", "", "green", ""]}
        />
        <div className="barline"></div>
        <EighthMeasure
          notes={["green", "", "pink", "", "orange", "", "green", ""]}
        />
      </div>
      <div className="row">
        <EighthMeasure
          notes={["orange", "", "purple", "", "yellow", "", "", ""]}
        />
        <div className="barline"></div>
        <EighthMeasure
          notes={["orange", "", "purple", "", "yellow", "", "", ""]}
        />
      </div>
      <div className="row">
        <EighthMeasure
          notes={[
            "yellow",
            "blue",
            "yellow",
            "purple",
            "orange",
            "",
            "green",
            "",
          ]}
        />
        <div className="barline"></div>
        <EighthMeasure
          notes={[
            "yellow",
            "blue",
            "yellow",
            "purple",
            "orange",
            "",
            "green",
            "",
          ]}
        />
      </div>
      <div className="row">
        <EighthMeasure
          notes={["green", "", "yellow", "", "green", "", "", ""]}
        />
        <div className="barline"></div>
        <EighthMeasure
          notes={["green", "", "yellow", "", "green", "", "", ""]}
        />
      </div>
    </div>
  )
}

export default FrereJacques
