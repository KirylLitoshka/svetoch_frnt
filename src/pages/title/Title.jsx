import React, {useEffect, useState} from 'react';
import axios from "axios";
import MenuList from "../../components/title_menu/MenuList";
import Loader from "../../components/ui/loader/Loader";
import useFetching from "../../hooks/useFetching";
import Error from "../../components/ui/error/Error";
import "./Title.css"

const Title = (props) => {
  const [subAppItems, setSubAppItems] = useState([])
  const [fetching, isLoading, error] = useFetching(async () => {
    const result = await axios.get("/api/v1/subsystems")
    setSubAppItems(result.data)
  })

  useEffect(() => {
    fetching()
  }, [])


  return (
      <div className="menu">
        {isLoading ?
            <Loader/> : <>
              {error ?
                  <Error message={error}/> : <MenuList items={subAppItems}/>
              }
            </>
        }
      </div>
  );
};

export default Title;