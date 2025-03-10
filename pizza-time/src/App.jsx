import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import Pizzas from "./routes/pizzaboxes";
import Other from "./routes/other";
import Receipt from "./routes/receipt";
import Leaderboard from "./routes/leaderboard";
import Consume from "./routes/consume"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza" element={<Pizzas />} />
          <Route path="/receipt" element={<Receipt/>} />
          <Route path="/leaderboard" element={<Leaderboard/>} />
          <Route path="/other" element={<Other/>} />
          <Route path="/consume" element={<Consume/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};