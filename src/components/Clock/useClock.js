import { useState } from "react";

export const useClock = (cb) => {

  const [currentTimeStamp, setCurrentTimeStamp] = useState(Date.now());

  const getCurrentTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  let timerIntervalId = setInterval(() => {
    const newTimeStamp = currentTimeStamp + 1000;
    setCurrentTimeStamp(newTimeStamp);
    const formattedTime = getCurrentTime(newTimeStamp);
    cb(formattedTime);
  }, 1000);

  return {
    currentTimeStamp,
    timerIntervalId,
  };
};