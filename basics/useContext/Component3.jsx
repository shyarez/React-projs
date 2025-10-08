// useContext() -- react hook that allows u to share values b/w multiple levels
//of components w/o passing props through each level

// this file will serve as the main/ 1st component
import {useContext} from 'react';
import { UserContext } from './Component1.jsx';
import Component4 from './Component4';

function Component3(){

    const user = useContext(UserContext);

    return(
    <div className ="box">
        <h1>Component3</h1>
        <h2>{`Hello Again ${user}`}</h2>
        <Component4 />
    </div>);
}

export default Component3;