import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import Pizzas from "./routes/pizzaboxes";
import Other from "./routes/other";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza" element={<Pizzas />} />
          <Route path="/other" element={<Other />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};