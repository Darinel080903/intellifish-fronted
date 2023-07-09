import routes from "../consts/Routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import Register from './Register';
import Fishes from "./Fishes";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.register} element={<Register />} />
        <Route path={routes.fishes} element={<Fishes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App