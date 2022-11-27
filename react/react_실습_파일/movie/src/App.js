import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Rank from "./Rank";
import Menu from "./Menu";

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Rank" element={<Rank />} />
      </Routes>
    </div>
  );
}

export default App;
