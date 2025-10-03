import React, {useState, useEffect} from 'react';

function UseEffectPt2(){

    //creating an example code of when we resize our window screen,
    //  it will update our widtha nd height attribute.
const [width,setWidth] = useState(window.innerWidth);
const [height,setHeight] = useState(window.innerHeight);

useEffect(() => {
window.addEventListener("resize",handleResize) //adding an event listener only when the component mounts
console.log("Event listener added");

return () => { //cleanup
window.removeEventListener("resize",handleResize);    
console.log("Event listener removed")
}
}, []);

useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
},[width,height]);

//NOTE- within a component, u can use more than 1 useEffect() hook.

// window.addEventListener("resize",handleResize)  //if we doing it w/o the useEffect()
// console.log("Event listener added");     // here the parameters:(event,function)

function handleResize(){
    setWidth(innerWidth);
    setHeight(innerHeight);
}       


    return(
        <div>
           <p>Window Width: {width}px</p>
           <p>Height Width: {height}px</p>
        </div>
    );
}
export default UseEffectPt2;