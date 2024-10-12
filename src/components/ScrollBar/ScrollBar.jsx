import { useState, useEffect } from "react";
import "./ScrollBar.css";

export const ScrollBar = () => {
  

  const [scrollBarWidth, setScrollBarWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollBar = document.querySelector(".scrollBar");
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;

      setScrollBarWidth((scrollTop / scrollHeight) * 100);

      scrollBar.style.width = scrollBarWidth + "%";
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollBarWidth]);

  return (
    <div>
      <div className="scrollBar"></div>
    </div>
  );
};
