import React, {useEffect, useState} from "react";
import useFetching from "../../../hooks/useFetching";
import axios from "axios";
import Loader from "../../../components/ui/loader/Loader";
import Error from "../../../components/ui/error/Error";
import RentersList from "../../../components/renters/RentersList";
import "./Renters.css"

const Renters = () => {
    const [renters, setRenters] = useState([])
    const [fetchingRenters, isLoading, error] = useFetching(async () => {
        const result = await axios.get(`/api/v1/renters`)
        setRenters(result.data)
    })

    useEffect(() => {
        fetchingRenters().then(() => null)
    }, [])

    return (
        <div className="renters">
            {isLoading ?
                <Loader/> : <>
                    {error ?
                        <Error message={error}/> : <RentersList items={renters}/>
                    }
                </>
            }
        </div>
    )
};

export default Renters;
