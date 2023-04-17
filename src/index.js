import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import HotCrossBuns from "./pages/HotCrossBuns"
import FrereJacques from "./pages/FrereJacques"
import TwinkleTwinkle from "./pages/TwinkleTwinkle"
import RollingAlong from "./pages/RollingAlong"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HotCrossBuns />} />
      <Route path="/frere" element={<FrereJacques />} />
      <Route path="/twinkle" element={<TwinkleTwinkle />} />
      <Route path="/rolling" element={<RollingAlong />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
