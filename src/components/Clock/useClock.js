import { useEffect } from "react";
import { getCurrentTime } from "../helpers/helpers";


export const useClock = (cb) => {

  useEffect(() => {
    const updateTime = () => {
      const newTime = getCurrentTime(Date.now());
      cb(newTime);
    }

    const timerIntervalId = setInterval(updateTime, 1000);

    return () => clearInterval(timerIntervalId)
  }, [cb])
};