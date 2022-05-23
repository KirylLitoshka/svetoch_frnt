import React from "react";
import Error from "../components/ui/error/Error";
import Home from "../pages/home/Home";
import ServicesRoutes from "./ServicesRoutes";
import {Route, Routes } from "react-router-dom";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":name/*" element={<ServicesRoutes />} />
      <Route path="*" element={<Error message="404" />} />
    </Routes>
  );
};

export default MainRoutes;
