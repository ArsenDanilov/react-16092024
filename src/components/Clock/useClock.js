import { useState, useCallback, useEffect } from "react";
import { getCurrentTime } from "../helpers/helpers";


export const useClock = (cb) => {

  const [currentTimeStamp, setCurrentTimeStamp] = useState(Date.now());

  let timerIntervalId = setInterval(() => {
    
    const newTimeStamp = currentTimeStamp + 1000;
    setCurrentTimeStamp(newTimeStamp);
    const formattedTime = getCurrentTime(newTimeStamp);
    cb(formattedTime);
  }, 1000);



  const clearTime = useCallback(() => {
    clearInterval(timerIntervalId);
  }, [timerIntervalId]);



  useEffect(() => {
    return () => clearTime();
  }, [currentTimeStamp, clearTime]);


  return {
    currentTimeStamp,
    timerIntervalId,
  };
};