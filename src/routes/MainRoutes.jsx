import React from "react";
import Error from "../components/ui/error/Error";
import Home from "../pages/home/Home";
import {Route, Routes } from "react-router-dom";
import Renters from "../pages/services/renters/Renters";
import Test from "../pages/Test";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="renters" element={<Renters />}/>
      <Route path="renters/asd" element={<Test/>}/>
      <Route path="*" element={<Error message="404" />} />
    </Routes>
  );
};

export default MainRoutes;
