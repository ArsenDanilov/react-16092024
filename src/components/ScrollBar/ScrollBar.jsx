import "./ScrollBar.css";

export const ScrollBar = () => {

  

  const onScroll = () => {
    const scrollBar = document.querySelector('.scrollBar');

    const scrollHeight = document.body.scrollHeight - window.innerHeight; 
    const scrollTop = window.scrollY; 
    const scrollbarWidth = (scrollTop / scrollHeight) * 100; 
    
    scrollBar.style.width = scrollbarWidth + '%';
  };

  window.addEventListener("scroll", onScroll);


  return (
    <div>
      <div className="scrollBar"></div>
    </div>
  );
};
