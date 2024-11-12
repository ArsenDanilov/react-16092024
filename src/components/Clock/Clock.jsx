import { useEffect, useCallback, useState } from "react";
import { useClock } from "./useClock";

export const Clock = () => {

    const [currentTime, setCurrentTime] = useState();

  // Реализовать компонент "часы", который отображается в шапке.
  // - Время меняется через интервал, ____который нужно не забыть почистить____. (зачем? в какой момент?)
  // - Логика хранится в отдельном кастомном хуке, который принимает колбек и вызывает его в интервале, колбек принимает текущее время.
  // - Компонент часов использует этот хук и меняет свое состояние в колбеке, чтобы отображать время

  //const [currentTimeStamp, setCurrentTimeStamp] = useState(Date.now());

  //   const increase = (timeStamp) => timeStamp++;

//   const { currentTimeStamp, timerIntervalId } = useClock((time) => time + 1000);
  const { timerIntervalId } = useClock(setCurrentTime);
  // const newResult = useEverySecond((value) => value * 2);

  const clearTime = useCallback(() => {
    // console.log("clear interval", timerIntervalId);
    clearInterval(timerIntervalId);
  }, [timerIntervalId]);

  

  useEffect(() => {
    // console.log("Render clocks");
    // setCurrentTime(getCurrentTime(currentTimeStamp));
    // console.log(currentTime);

    return () => clearTime();
  }, [currentTime, clearTime, timerIntervalId]);

  return (
    <div>
      <h2>Here will be time (clock)</h2>
      <h1>{currentTime}</h1>
    </div>
  );
};
