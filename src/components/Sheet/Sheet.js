import React from "react"
import HotCrossBuns from "./HotCrossBuns"
import TwinkleTwinkle from "./TwinkleTwinkle"
import RollingAlong from "./RollingAlong"
import "./Sheet.css"

const Sheet = ({ title }) => {
  console.log(title)
  return (
    <div className="sheet">
      {title.name === "HotCrossBuns" && <HotCrossBuns />}
      {title.name === "TwinkleTwinkle" && <TwinkleTwinkle />}
      {title.name === "RollingAlong" && <RollingAlong />}
    </div>
  )
}

export default Sheet
