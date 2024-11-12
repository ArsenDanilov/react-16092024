import { useState } from "react";

export const useClock = (cb) => {
// Реализовать компонент "часы", который отображается в шапке.
// - Время меняется через интервал, который нужно не забыть почистить. 
// - Логика хранится в отдельном кастомном хуке, который принимает колбек и вызывает его в интервале, колбек принимает текущее время. 
// - Компонент часов использует этот хук и меняет свое состояние в колбеке, чтобы отображать время


    // const [currentTime, setCurrentTime] = useState(getCurrentTime(Date.now()));


    const [currentTimeStamp, setCurrentTimeStamp] = useState(Date.now());
    
    

    const getCurrentTime = (timestamp) => {
        const date = new Date(timestamp);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    // let timerId = setTimeout(function tick() {
    //     console.log('tick');
    //     cb();
    //     timerId = setTimeout(tick, 2000); // (*)
    // }, 2000);

    
    let timerIntervalId = setInterval(() => {
      // const newTimeStamp = cb(currentTimeStamp);
      const newTimeStamp = currentTimeStamp + 1000;
      setCurrentTimeStamp(newTimeStamp);
      const formattedTime = getCurrentTime(newTimeStamp);
      cb(formattedTime);
    }, 1000);

    // console.log('currentTimeStamp', currentTimeStamp, timerIntervalId );


    return {
      currentTimeStamp,
      timerIntervalId,
    };
};