import React, { useRef, useEffect, useState } from "react";
import {TimerContainer,TimerNumber} from './Timer.style'

export default function Timer() {
  const [num, setNum] = useState(180);
  
  let intervalRef = useRef();
  
  const decreaseNum = () => setNum((prev) => prev - 1);

  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);
    
    return () => clearInterval(intervalRef.current);
  }, []);

  if(num===0){
    window.location.href = "http://localhost:3000/login";
  }


  return (
    <TimerContainer>
        <TimerNumber>{num}</TimerNumber>
        <p>seconds</p>
    </TimerContainer>
  );
}