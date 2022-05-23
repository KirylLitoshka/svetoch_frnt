import React, {useEffect, useState} from 'react';
import axios from "axios";
import MenuList from "../../components/menu/MenuList";
import Loader from "../../components/ui/loader/Loader";
import useFetching from "../../hooks/useFetching";
import Error from "../../components/ui/error/Error";
import "./Home.css"

const Home = () => {
  const [subsystemItems, setSubsystemItems] = useState([])
  const [fetching, isLoading, error] = useFetching(async () => {
    const result = await axios.get("/api/v1/subsystems")
    setSubsystemItems(result.data)
  })

  useEffect(() => {
    fetching().then(() => null)
  }, [])


  return (
      <div className="menu">
        {isLoading ?
            <Loader/> : <>
              {error ?
                  <Error message={error}/> : <MenuList items={subsystemItems}/>
              }
            </>
        }

      </div>
  );
};

export default Home;