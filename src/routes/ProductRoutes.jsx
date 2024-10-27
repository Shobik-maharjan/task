import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import SinglePage from "../pages/SinglePage/SinglePage";

const ProductRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SinglePage />} />
      </Routes>
    </>
  );
};

export default ProductRoutes;
