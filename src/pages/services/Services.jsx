import React, { useEffect, useState } from "react";
import axios from "axios";
import useFetching from "../../hooks/useFetching";
import Error from "../../components/ui/error/Error";
import Loader from "../../components/ui/loader/Loader";
import MenuList from "../../components/menu/MenuList";
import { useParams } from "react-router-dom";

const Services = ({ items, setItems }) => {
  const param = useParams();
  const [fetchServices, isServicesLoading, servicesError] = useFetching(
    async () => {
      const result = await axios.get(
        `/api/v1/subsystems/${param.name}/services`
      );
      setItems(result.data);
    }
  );

  useEffect(() => {
    fetchServices().then(() => null);
  }, []);

  return (
    <React.Fragment>
      {isServicesLoading ? (
        <Loader />
      ) : servicesError ? (
        <Error message={servicesError} />
      ) : (
        <MenuList items={items} />
      )}
    </React.Fragment>
  );
};

export default Services;
