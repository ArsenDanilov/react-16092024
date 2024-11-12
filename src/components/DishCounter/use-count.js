import { useState } from "react";

export const useCount = () => {

    const [value, setValue] = useState(0);

    const increase = () => {
      if (value < 5) {
        setValue(value + 1);
      }
    };

  const decrease = () => {
    if (value > 0) {
      setValue((prevState) => prevState - 1);
    }
  };

  return {
    value,
    increase,
    decrease,
  };
};
