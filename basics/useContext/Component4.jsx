// useContext() -- react hook that allows u to share values b/w multiple levels
//of components w/o passing props through each level

// this file will serve as the main/ 1st component

import {useContext} from 'react';
import { UserContext } from './Component1.jsx';

function Component4(){

    const user = useContext(UserContext);

    return(
    <div className ="box">
        <h1>Component4</h1>
        <h2>{`Bye ${user}`}</h2>
    </div>);
}

export default Component4;