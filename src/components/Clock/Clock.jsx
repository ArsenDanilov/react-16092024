import { useState } from "react";
import { useClock } from "./useClock";
import { getCurrentTime } from "../helpers/helpers";

export const Clock = () => {
  const date = getCurrentTime(Date.now());  

  const [time, setTime] = useState(date);

  useClock(setTime);

  return (
    <div>
      <h2 style={{ color: "white" }}>{time}</h2>
    </div>
  );
};