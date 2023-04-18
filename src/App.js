import Root from "./components/Root"
import HotCrossBuns from "./pages/HotCrossBuns"
import FrereJacques from "./pages/FrereJacques"
import TwinkleTwinkle from "./pages/TwinkleTwinkle"
import RollingAlong from "./pages/RollingAlong"
import OdeToJoy from "./pages/OdeToJoy"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HotCrossBuns />} />
      <Route path="/frere" element={<FrereJacques />} />
      <Route path="/twinkle" element={<TwinkleTwinkle />} />
      <Route path="/rolling" element={<RollingAlong />} />
      <Route path="/ode" element={<OdeToJoy />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
