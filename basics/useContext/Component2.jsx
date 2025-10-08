// useContext() -- react hook that allows u to share values b/w multiple levels
//of components w/o passing props through each level

// this file will serve as the main/ 1st component

import Component3 from './Component3';

function Component2(){
    return(
    <div className ="box">
        <h1>Component2</h1>
        <Component3 />
    </div>);
}

export default Component2;