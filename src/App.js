import "./App.css";
import React, { Suspense } from "react";
import BaseScreen from "./screens/BaseScreen";
import LoadingSpinner from "./components/layouts/LoadingSpinner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const HomeScreen = React.lazy(() => import("./screens/HomeScreen"));
const CategoryScreen = React.lazy(() => import("./screens/CategoryScreen"));
const GenderScreen = React.lazy(() => import("./screens/GenderScreen"));
const ProductScreen = React.lazy(() => import("./screens/ProductScreen"));
const NotFoundScreen = React.lazy(() => import("./screens/NotFoundScreen"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseScreen />}>
          <Route
            index
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <HomeScreen />
              </Suspense>
            }
          />
          <Route
            path="/category"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <CategoryScreen />
              </Suspense>
            }
          />
          <Route
            path="/gender"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <GenderScreen />
              </Suspense>
            }
          />
          <Route
            path="/product"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <ProductScreen />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <NotFoundScreen />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
