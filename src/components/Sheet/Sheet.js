import React from "react"
import HotCrossBuns from "./HotCrossBuns"
import TwinkleTwinkle from "./TwinkleTwinkle"
import RollingAlong from "./RollingAlong"
import FrereJacques from "./FrereJacques"
import "./Sheet.css"

const Sheet = ({ title }) => {
  console.log(title)
  return (
    <div className="sheet">
      {title.name === "HotCrossBuns" && <HotCrossBuns />}
      {title.name === "TwinkleTwinkle" && <TwinkleTwinkle />}
      {title.name === "RollingAlong" && <RollingAlong />}
      {title.name === "FrereJacques" && <FrereJacques />}
    </div>
  )
}

export default Sheet
