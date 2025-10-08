// useContext() -- react hook that allows u to share values b/w multiple levels
//of components w/o passing props through each level

// this file will serve as the main/ 1st component

//PROVIDER COMPONENT
//1. import {createContext} from 'react';
//2. export const MyContext = createContext();
//3. <MyContext.Provider value = {value}>
//         <Child />
//    </MyContext.Provider>

//CONSUMER COMPONENTS 
// 1. import React, {useContext} from 'react';
//    import {MyContext} from './Component1';
// 2. const value = useContext(MyContext);


import {useState,createContext} from 'react';
import Component2 from './Component2';

export const UserContext = createContext();

function Component1(){

    const [user,setUser] = useState("Shreya");

    return(
    <div className ="box">
        <h1>Component1</h1>
        <h2>{`Hello ${user}`}</h2>
        
        <UserContext.Provider value ={user}>
            <Component2  />
        </UserContext.Provider>
        
    </div>);
}

export default Component1;