import routes from "../consts/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import Register from './Register';
import Fishes from "./Fishes";
import Statistics from "./Statistics";
import Fishbowl from "./Fishbowl";
import AddPlants from "./AddPlants";
import AddFish from "./AddFish";
import Plants from "./Plants";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.register} element={<Register />} />
        <Route path={routes.fishes} element={<Fishes />} />
        <Route path={routes.statistics} element={<Statistics />} />
        <Route path={routes.fishbowl} element={<Fishbowl />} />
        <Route path={routes.addplants} element={<AddPlants />} />
        <Route path={routes.addfish} element={<AddFish />} />
        <Route path={routes.plants} element={<Plants />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App