//  ----- UpdateArrayOfObjects-----
//  useState([]) to store array of car objects
//  useState("") for each input field (year, make, model)
//  Add new car using spread syntax: [...prev, newCar]
//  Remove car by index using filter()
//  Always return a new array to trigger re-render


import React, {useState} from 'react';

function UpdateArrayOfObjects(){

    // State to hold the array of car objects
    const [cars,setCars] = useState([]);

    // Individual input states for each car property
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
    const newCar = {year: carYear,
                    make: carMake,
                    model: carModel};

    // Append new car to the array                
    setCars(c => [...c, newCar]);
    
    // Reset input fields
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
    }

    function handleRemoveCar(index){ // Removes a car object by index
     setCars(c => c.filter((_,i) => i!== index));
    }

    function handleYearChange(e){
    setCarYear(e.target.value);
    }

    function handleMakeChange(e){
    setCarMake(e.target.value);    
    }

    function handleModelChange(e){
    setCarModel(e.target.value);    
    }

    return(
        <div>
          <h2>List of Car Objects</h2>
          <ul>
           {cars.map((car,index) => 
           <li key= {index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
           </li>)}  
          </ul>

 {/* Input fields for car details */}
          <input type="number" value={carYear} onChange={handleYearChange}/> <br/>
          <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Car Make" /> <br/>
          <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter Car Model" /> <br/>
          
{/* Button to add car to the list */}
        <button onClick={handleAddCar}>Add Car</button>

        </div>
    );

}


export default UpdateArrayOfObjects