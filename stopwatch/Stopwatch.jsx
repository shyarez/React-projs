
import {useState, useEffect, useRef} from 'react';

function Stopwatch(){

const [isRunning, setIsRunning] = useState(false); //isRunning > true if the stopwatch is running
const [elapsedTime,setElapsedTime] = useState(0);  //elapsedTime > how much time has passed (in ms).
const [laps, setLaps] = useState([]);              //laps > a list of saved lap times
const intervalRef = useRef(null);                  //intervalRef > stores the timer so we can stop it later
const startTimeRef = useRef(0);                    //startTimeRef > remembers when the stopwatch started

useEffect(() => {
if(isRunning){
    intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
    },100);
}else{
    clearInterval(intervalRef.current);
}
return() => clearInterval(intervalRef.current);
}, [isRunning]);


function reset(){
 clearInterval(intervalRef.current);
 setIsRunning(false); //pausing it
 setElapsedTime(0);
 startTimeRef.current = 0;
 setLaps([]);
}


function toggleStartStop(){
 if(isRunning){
    setIsRunning(false);
 }else{
    startTimeRef.current = Date.now() - elapsedTime;
    setIsRunning(true);
 }
}


function lapse() {
const lapTime = formatTime();
setLaps(prev => [...prev, lapTime]);

}

function formatTime(){
const totalSeconds = Math.floor(elapsedTime/1000);
const minutes = String(Math.floor(totalSeconds/60)).padStart(2, '0');
const seconds= String(totalSeconds % 60).padStart(2,'0');
const milliseconds= String(Math.floor(elapsedTime % 1000) / 10).padStart(2,'0');
return `${minutes}:${seconds}:${milliseconds}`;;
}

return(
    <div className="stopwatch">
        <div className="display">{formatTime()}</div>
        <div className="controls">
        <button onClick ={reset} className="reset-button">⟲</button>
         <button onClick={toggleStartStop} className="start-button">
          {isRunning ? '⏸' : '▷'}
        </button>
        <button onClick ={lapse} className="lapse-button">⏱</button>
        </div>

{laps.length > 0 &&(
    <div className="laps">
        <h3>Lap Times:</h3>
        <ul>
            {laps.map((lap,index) => (
                <li key={index}>➺ Lap {index+1}: {lap}</li>
            ))}
        </ul>
        </div>
)}

    </div>
);

}
export default Stopwatch;