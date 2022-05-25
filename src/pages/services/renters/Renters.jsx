import React, {useEffect, useState} from "react";
import useFetching from "../../../hooks/useFetching";
import {useParams} from "react-router-dom";
import axios from "axios";

const Renters = () => {
  const params = useParams()
  const [renters, setRenters] = useState([])
  const [fetchingRenters, isLoading, error] = useFetching(async () => {
    const result = await axios.get(`/api/v1/subsystems/${params.name}/renters`)
    setRenters(result.data)
  })

  useEffect(() => {
    fetchingRenters().then(() => null)
  }, [])

  console.log(renters)
  return (
      <div>Hello</div>
  )
};

export default Renters;
