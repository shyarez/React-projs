//  Updating Objects in React
// ✅ useState() can store objects like: { year, make, model }
// ✅ To update part of the object, use setState with a copy:
//    setCar(prev => ({ ...prev, make: "BMW" }))
// 🔄 ...prev keeps the old values, and you override only what you change
// ❌ Don't do car.make = "BMW" >> React won't re-render!
//     Always return a NEW object using spread syntax (...prev)


import React, {useState} from 'react';

function UpdateObjects(){

const [car,setCar] = useState({year: 2020, 
                               make: "Mercedes-AMG",
                               model:"GT Black"});



function handleYearChange(e){
    setCar(c => ({...c, year: e.target.value})) //... = spread all the current properties of our car
                                // and then we are updating the year
}

function handleMakeChange(e){
    setCar(c => ({...c, make: e.target.value}))
}

function handleModelChange(e){
    setCar(c => ({...c, model: e.target.value}))
}

return(
<div>
<p>My Favourite CAR: {car.year} {car.make} {car.model} </p>

<input type="number" value={car.year} onChange={handleYearChange} />  <br/>
<input type="text" value={car.make}   onChange={handleMakeChange} />  <br/>
<input type="text" value={car.model}  onChange={handleModelChange} /> <br/>
</div>
);
}

export default UpdateObjects;