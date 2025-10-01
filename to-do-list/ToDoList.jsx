import React, {useState,useEffect} from 'react';

function ToDoList(){

const [tasks, setTasks] = useState([]);  
const [ newTask, setNewTask] = useState("");  
const [darkMode, setDarkMode] = useState(false); //theme toggle

useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(darkMode ? "dark-mode" : "light-mode");
  }, [darkMode]);


function handleInputChange(e){ //this is for a textbox when we need to add something
setNewTask(e.target.value);
}

function addTask(){
  if(newTask.trim() !== ""){
setTasks(t => [...t,newTask]);
setNewTask(""); // for reseting the task
  }
}

function deleteTask(index){
  const updatedTasks = tasks.filter((_,i) => i!==index);
  setTasks(updatedTasks);
}

function moveTaskUp(index){
   if(index>0){
    const updatedTasks = [...tasks];
    [updatedTasks[index] , updatedTasks[index-1]] =
    [updatedTasks[index-1] , updatedTasks[index]]
    setTasks(updatedTasks); 
  }
}

function moveTaskDown(index){
   if(index<tasks.length -1){
    const updatedTasks = [...tasks];
    [updatedTasks[index] , updatedTasks[index+1]] =
    [updatedTasks[index+1] , updatedTasks[index]]
    setTasks(updatedTasks); 
  }
}

    return(
    <div className="to-do-list">
      <h1>⟢ To-Do List ⟢</h1>

     <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☼ Light Mode" : "☾ Dark Mode"}
      </button>
  
      <div className="input-section">

        <input 
        type= "text" 
        placeholder="Add a new task..."
        value = {newTask}
        onChange = {handleInputChange}
        />

         <button 
         className ="add-button"
         onClick= {addTask}
         >+ Add Task</button>

      </div>

      <ol>
        {tasks.map((task,index) =>
        <li key ={index}>
        <span 
        className = "text" 
        > {task} </span>

        <button className="delete-button"
        onClick= {() => deleteTask(index)}>
          ✘
        </button>

        <button className="move-up-button"
        onClick= {() => moveTaskUp(index)}>
          㐃
        </button>

        <button className="move-down-button"
        onClick= {() => moveTaskDown(index)}>
          🡻
        </button>

      </li>  
        )}
      </ol>

    </div>
    );
}

export default ToDoList;