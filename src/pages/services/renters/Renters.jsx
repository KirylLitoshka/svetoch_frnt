import React, {useEffect, useState} from "react";
import useFetching from "../../../hooks/useFetching";
import axios from "axios";
import Loader from "../../../components/ui/loader/Loader";
import Error from "../../../components/ui/error/Error";
import RentersList from "../../../components/renters/RentersList";
import "./Renters.css"
import ModalWindow from "../../../components/ui/modal/ModalWindow";
import RenterContextMenu from "../../../components/renters/RenterContextMenu";

const Renters = () => {
    const [renters, setRenters] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [modalItemId, setModalItemId] = useState(null)
    const [fetchingRenters, isLoading, error] = useFetching(async () => {
        const result = await axios.get(`/api/v1/renters`)
        setRenters(result.data)
    })

    useEffect(() => {
        fetchingRenters().then(() => null)
    }, [])

    return (
        <div className="renters">
            <ModalWindow isVisible={modalVisible} setVisible={setModalVisible}
                         children={<RenterContextMenu itemID={modalItemId}/>}/>
            {isLoading ?
                <Loader/> : <>
                    {error ?
                        <Error message={error}/> :
                        <RentersList items={renters} modalVisible={setModalVisible} setItemID={setModalItemId}/>
                    }
                </>
            }
        </div>
    )
};

export default Renters;
