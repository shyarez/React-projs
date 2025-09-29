import React, {useState, useEffect} from 'react' 

function ColorPicker(){
const [color,setColor] = useState("#ffffff");
const [darkMode,setDarkMode] = useState(false);

useEffect(() => {
    document.body.classList.toggle('dark',darkMode);
  },[darkMode]);

const toggleDarkMode = () => setDarkMode(!darkMode);
const copyHex = () => {
  navigator.clipboard.writeText(color);
  alert(`Copied: ${color}`);
};

function handleColorChange(e) {
    setColor(e.target.value);
}    
return (
    <div className= {`color-picker-container ${darkMode ? 'dark' : ''}`}>
       <div className="top-bar">
    <button onClick={toggleDarkMode}>
      {darkMode ? '☼ Light Mode' : ' ⏾ Dark Mode'}
    </button>
  </div>

  <h1>Color Picker</h1>

       <div className="color-display" style={{backgroundColor:color}}> 
       <p>Selected Color: {color} </p>
       <button onClick={copyHex}>Copy Hex</button>
       </div>

       <label>Select a Color:</label>
       <input type="color" value={color} onChange={handleColorChange} />
    </div>
);
}
export default ColorPicker