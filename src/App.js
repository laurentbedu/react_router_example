import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import GenderScreen from "./screens/GenderScreen";
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/category" element={<CategoryScreen />} />
        <Route path="/gender" element={<GenderScreen />} />
        <Route path="/product" element={<ProductScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
