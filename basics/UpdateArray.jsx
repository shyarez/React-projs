import React, {useState} from 'react';

function UpdateArray(){

const [foods,setFoods] = useState(["Avacado", "Cherry", "Watermelon"]);

function handleAddFood(){
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods(f => [...f,newFood]);
}

function handleRemoveFood(index){
    setFoods(foods.filter((_,i) => i !== index)); // here we replaced 'element' w/ an _ (underscore)
                                                  // using an underscore for a parameter is a convention 
                                                  // to indicate that the parameter being passed to the function is IGNORED.
}

return(
    <div>
    <h2>List of Food Items</h2>
    <ul>
        {foods.map((food, index) =>
        <li key={index} onClick={() => handleRemoveFood(index)}>
        {food} 
        </li>)}
    </ul>
    <input type="text" id="foodInput" placeholder="Enter food name" /> 
    <button onClick={handleAddFood}>Add Food</button>
    </div>
);
                        //id= foodInput is used for DOM ACCESS
}                       //key={index} >>n for React's internal tracking
export default UpdateArray;

// id="foodInput" → For DOM Access
// used in:document.getElementById("foodInput").value;
// Reasons:--
// We are using vanilla JavaScript to grab the input value directly from the DOM.
// - id="foodInput" gives the input a name
// - getElementById("foodInput") finds it & reads its value
// HOWEVER, in React we usually prefer controlled inputs using useState.


// React needs a unique key for each list item so it can:
// - Track which item changed
// - Efficiently update only that item
// - Avoid bugs when adding/removing items


// Why index?
// We used index because our items don’t have unique IDs. Its okay for simple lists,, but in real apps, we prefer:
// <li key={food.id}> // if each food had an id









