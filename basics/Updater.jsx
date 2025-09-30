//updater function:- function passed as an argument to setState() usually.
//e.g: setAge(age + 1) ,,better practice: setAge(updater function)--- usually represented as an arror function.

// allows for safe updates based on previous state.
//used w/ multiple state updates & asynchronous functions.
// Good practice to use updater functions.

import React, {useState} from 'react';
function Updater(){
const[count,setCount] = useState(0);

function increment(){
//setCount(count+1); 
//setCount(count+1); Our increment still be updated by 1 only, here's how:
//setCount(count+1); ⬇️⬇️⬇️

//----REASONS---
//uses the 'CURRENT' state to calculate the next state.
//set functions do not trigger an update
//React batches together state updates for performance reasons.
//NEXT state becomes the CURRENT state after an update.


// So, we use an updater function now,
// 1. Takes the PENDING state to calculate NEXT state.
// 2. React puts your updater function in a Queue (waiting in line)
// 3. During the next render, it will call them in the same order.

    setCount(c => c+1); // c represents the prevCount not the current count.
    setCount(c => c+1);
    setCount(c => c+1);
};

function decrement(){
    setCount(c => c-1); // c represents the prevCount not the current count.
    setCount(c => c-1);
    setCount(c => c-1);
};

function reset(){
    setCount(0);
}

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
export default Updater