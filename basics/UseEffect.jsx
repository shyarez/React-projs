// (useEffect : this is basically like a side code you perform)

//useEffect() -- React hook that tells React to do some code when (any of the following):
//1. this component re-renders
//2. this component mounts 
// (i) Mounting = when your component first appears on the screen.
// (ii) When u mount a component, thats when u create an appendent to the DOM. Basically u add a component to the DOM.
//3. the state of a value changes

// SYNTAX: useEffect(function,[dependencies])

// 1. useEffect(() => {}) Runs after every re-render 
// 2.useEffect(() => {}, []) Runs only on Mount 
// 3. useEffect(() => {}, [value]) Runs on mount + when value MdTrackChanges

// --USES-- 
// 1. Event Listeners 
// 2. DOM Manipulation
// 3. Subscriptions (Real-time updates)
// 4. Fetching Data from an API
// 5. Clean up when a component unmounts // unmount- removing a component from the DOM

import React, {useState, useEffect} from 'react';

function UseEffect(){

const [count,setCount] = useState(0);
const [color,setColor] = useState("pink");

//be sure to use the useEffect() near the top of your component!
// useEffect( () => {
// document.title = `Count: ${count}`;           // CASE 1
// });

// useEffect( () => {
// document.title = `My Counter Program`;        // CASE 2 -- its a one-n-done effect
// }, []);

useEffect( () => {
document.title = `Count: ${count} ${color}`;     // CASE 3 -- when we want our func dependency array's value to change
return () => {
    // cleanup code : before the next re-render or when u wanan unmount the component
}
}, [count,color]);


function addCount(){
    setCount(c => c+1);
}

function minusCount(){
    setCount(c => c-1);
}

function changeColor(){
    setColor(c => c === "pink" ? "green" : "pink");
}

    return(
        <div>
            <p style= {{color: color}}>Count: {count} </p>
            <button onClick={addCount}>Add</button>
            <button onClick={minusCount}>Minus</button> <br/>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}
export default UseEffect;