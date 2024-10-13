import { useState, useEffect } from "react";
import "./ScrollBar.css";

export const ScrollBar = () => {
  

  const [scrollBarWidth, setScrollBarWidth] = useState("0%");

  useEffect(() => {
    const onScroll = () => {
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;

      setScrollBarWidth((scrollTop / scrollHeight) * 100 + '%');
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <div>
      <div className="scrollBar" style={{ width: scrollBarWidth }}></div>
    </div>
  );
};
