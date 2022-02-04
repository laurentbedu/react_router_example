import "./App.css";
import BaseScreen from "./screens/BaseScreen";
import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import GenderScreen from "./screens/GenderScreen";
import ProductScreen from "./screens/ProductScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseScreen />}>
          <Route index element={<HomeScreen />} />
          <Route path="/category" element={<CategoryScreen />} />
          <Route path="/gender" element={<GenderScreen />} />
          <Route path="/product" element={<ProductScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
