import { useEffect, useCallback, useState } from "react";
import { useClock } from "./useClock";

export const Clock = () => {
  const [currentTime, setCurrentTime] = useState();

  const { timerIntervalId } = useClock(setCurrentTime);

  const clearTime = useCallback(() => {
    clearInterval(timerIntervalId);
  }, [timerIntervalId]);

  useEffect(() => {

    return () => clearTime();
  }, [currentTime, clearTime, timerIntervalId]);

  return (
    <div>
      <h1>{currentTime}</h1>
    </div>
  );
};
