import { useState } from "react";
import { Counter } from "../Counter/Counter";

export const DishCounter = () => {
  const [value, setValue] = useState(0);

  const increase = () => {
    if (value < 5) {
      setValue(value + 1);
    }
  };

  const decrease = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    //   <div>
    //     <button type="button" onClick={increase}>
    //       +
    //     </button>
    //     {value}
    //     <button type="button" onClick={decrease}>
    //       -
    //     </button>
    //   </div>

    <div>
      <Counter value={value} increase={increase} decrease={decrease} />
    </div>
  );
};
