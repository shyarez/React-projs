import React, {useState,useEffect} from 'react'

function DigitalClock() {

const [time,setTime] = useState(new Date());

useEffect(() => {
const intervalId = setInterval(() => 
    {
        setTime(new Date());
    },1000);

return () => {
clearInterval(intervalId);
}

},[]);

function timeFormat(){
  const hours = time.getHours();    
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const meridiem = hours >= 12 ? "PM" : "AM";
  const pad = (num) => String(num).padStart(2, '0');

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${meridiem}`;
}

// function timeFormat() {
//   return time.toLocaleTimeString('en-IN', {
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
//     hour12: false,
//     timeZone: 'Asia/Kolkata'
//   });
// }

// function timeFormat(){
//     let hours = time.getHours();
//     const minutes = time.getMinutes();
//     const seconds = time.getSeconds();
//     const meridiem = hours >=12 ? "PM" : "AM";

//     hours = hours % 12 || 12;

//     return `${hours}:${minutes}:${seconds} ${meridiem}`
// }

    return(
        <>
        <div className= "clock-container">
            <div className="clock">
                 <span>{timeFormat()}</span>
            </div>

        </div>
        </>
    );
}
export default DigitalClock;