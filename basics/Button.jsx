function Button(){
    let count=0;
    const handleClick = (e)=> e.target.textContent="OUCH!💀"; //e- event
    //     if(count<3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`);
    //     }
    //     else{
    //         console.log(`${name} stop clicking me!`);
    //     }
    // };
    return(
        <button onDoubleClick={(e)=> handleClick(e)}>Click me!</button>
        //<button onClick={(e)=> handleClick(e)}>Click me!</button>
    );
}
export default Button