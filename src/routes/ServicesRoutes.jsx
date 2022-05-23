import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Services from "../pages/services/Services";
import Test from "../pages/Test";

const ServicesRoutes = () => {
  const [services, setServices] = useState([]);

  return (
    <Routes>
      <Route
        index
        element={<Services items={services} setItems={setServices} />}
      />
      {services.map((service) => (
        <Route key={service.id} path={`${service.name}`} element={<Test />} />
      ))}
    </Routes>
  );
};

export default ServicesRoutes;