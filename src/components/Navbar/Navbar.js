import React from "react"
import "./Navbar.css"

const Navbar = ({ changeTitle }) => {
  return (
    <div className="nav">
      <ul>
        <li>HOME</li>
        <li
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
          onClick={() =>
            changeTitle({
              name: "TwinkleTwinkle",
              src: "twinkle-twinkle.png",
            })
          }
        >
          TWINKLE TWINKLE
        </li>
        {/* <li>FRERE JACQUES</li> */}
      </ul>
    </div>
  )
}

export default Navbar
