import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Services from "../pages/services/Services";
import componentRegister from "../components/register/Register";

const ServicesRoutes = () => {
  const [services, setServices] = useState([]);
  return (
    <Routes>
      <Route
        index
        element={<Services items={services} setItems={setServices} />}
      />
      {services.map((service) => (
        <Route
          key={service.id}
          path={`${service.name}`}
          element={componentRegister[`${service.name}`]}
        />
      ))}
    </Routes>
  );
};

export default ServicesRoutes;
