import React from 'react';
import {useLocation, useMatch, useParams} from 'react-router-dom';

const Test = (props) => {
    const params = useParams()
    const temp = useMatch("")
    const location = useLocation()
    console.log(location)


    return (
        <div>
            Some test value
        </div>
    );
};

export default Test;