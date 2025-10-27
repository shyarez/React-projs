//useState() -- re-renders the component when the state value changes

//useRef() = "use Reference" Does not cause re-renders when its value changes.
//            When you want a component to "remember" some information, but
//            you don't want that information to trigger new renders.  
//           It returns a ref object, object that has one property of current, initilly set to
//           the initial value you provided

// 1. Accessing/Interacting with DOM elements
// 2. Handling Focus, Animations and Transitions
// 3. Managing Timers and Intervals

import React, {useRef, useEffect} from 'react';

function UseRef() {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    console.log("PIZZA");

    useEffect(() => {
        console.log("COMPONENT IS RENDERED");
    });

function handleClick(ref) {
    ref.current.focus();
    ref.current.style.backgroundColor = "yellow";
}

    return(
        <div>
        <button onClick={() => handleClick(inputRef1)}>
            Click me 1!
        </button>
        <input ref= {inputRef1}/>

         <button onClick={() => handleClick(inputRef2)}>
            Click me 2!
        </button>
        <input ref ={inputRef2} />

         <button onClick={() => handleClick(inputRef3)}>
            Click me 3!
        </button>
        <input ref ={inputRef3} />

        </div>
    );
}
export default UseRef;




