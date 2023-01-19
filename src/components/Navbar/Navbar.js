import React from "react"
import "./Navbar.css"

const Navbar = ({ changeTitle }) => {
  return (
    <div className="nav">
      <ul>
        <li>HOME</li>
        <li
          className="easy"
          onClick={() =>
            changeTitle({
              name: "HotCrossBuns",
              src: "hot-cross-buns.png",
            })
          }
        >
          HOT CROSS BUNS
        </li>
        <li
          className="easy"
          onClick={() =>
            changeTitle({
              name: "RollingAlong",
              src: "rolling-along.png",
            })
          }
        >
          ROLLING ALONG
        </li>
        <li
          className="medium"
          onClick={() =>
            changeTitle({
              name: "TwinkleTwinkle",
              src: "twinkle-twinkle.png",
            })
          }
        >
          TWINKLE TWINKLE
        </li>
        <li
          className="medium"
          onClick={() =>
            changeTitle({
              name: "FrereJacques",
              src: "frere-jacques.png",
            })
          }
        >
          FRERE JACQUES
        </li>
      </ul>
    </div>
  )
}

export default Navbar
