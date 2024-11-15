import { useState } from "react";
import { useClock } from "./useClock";

export const Clock = () => {
 const [currentTime, setCurrentTime] = useState();

  useClock(setCurrentTime);

  return (
    <div>
      <h1 style={{ color: "white"}}>{currentTime}</h1>
    </div>
  );
};
