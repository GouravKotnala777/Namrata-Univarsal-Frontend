import { useEffect, useState } from "react";


function useScrollActivity() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId:number;

    const onScroll = () => {
      setIsScrolling(true);



      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 200); // consider scrolling stopped after 150ms of no movement
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return { isScrolling };
}

export default useScrollActivity;