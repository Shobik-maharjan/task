import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductRoutes from "./routes/ProductRoutes";
import ProductLayout from "./layout/ProductLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<ProductLayout />}>
            <Route path="*" element={<ProductRoutes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
