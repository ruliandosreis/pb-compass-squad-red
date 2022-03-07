import React, { useRef, useEffect, useState } from "react";
import {ResetContainer,TimerContainer,TimerNumber,FooterResetTimerDiv,FooterResetTimerButton} from './Timer.style'

export default function Timer() {
<<<<<<< HEAD
  let number = 18000;
=======
  let number = 100000;
>>>>>>> e851941238b9b2a144ab5eab7a48673dcd905cc7

  const [num, setNum] = useState(number);
  
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
    <ResetContainer>
    <TimerContainer>
        <TimerNumber>{num}</TimerNumber>
        <p>seconds</p>
    </TimerContainer>
      <FooterResetTimerDiv>
          <FooterResetTimerButton onClick ={()=>setNum(180)}>Continuar Navegando
      </FooterResetTimerButton>
    </FooterResetTimerDiv>
    </ResetContainer>
  );
}