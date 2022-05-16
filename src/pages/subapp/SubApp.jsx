import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import useFetching from "../../hooks/useFetching";
import axios from "axios";
import Loader from "../../components/ui/loader/Loader";
import Error from "../../components/ui/error/Error";

const SubApp = () => {
  const params = useParams()
  const [services, setServices] = useState([])
  const [fetchServices, isServicesLoading, servicesError] = useFetching(async () => {
    const result = await axios.get(`/api/v1/subsystems/${params.name}/services`)
    setServices(result.data)
  })

  useEffect(() => {
    fetchServices()
  }, [])

  return (
      <div className="menu">
        {isServicesLoading ?
            <Loader/> : <>
              {servicesError ?
                  <Error message={servicesError}/> :<div>QQQQQ</div>
              }
            </>
        }
      </div>
  );
};

export default SubApp;