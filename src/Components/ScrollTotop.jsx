import React from "react"; 
import { useState, useEffect } from "react";
import {BsFillArrowUpCircleFill} from "react-icons/bs"

 
 function ScrollToTop() {
    const [visibleButton, setVisibleButton] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", handleScrollTop);
      return () => {
        window.removeEventListener("scroll", handleScrollTop);
      };
    }, []);
  
    const handleScrollTop = () => {
      const scrollToTop = window.pageYOffset;
      const scrollThresholdButton = 300;
      setVisibleButton(scrollToTop <= scrollThresholdButton);
    };
    const ScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    return (
      <button
        onClick={ScrollToTop}
        className={`h-[60px] w-[60px] ${
          visibleButton ? "hidden" :"block"
        } z-[999] rounded-full p-1  flex justify-center items-center  bg-sky-800 animate-bounce text-white  text-3xl fixed bottom-[40px] right-[40px]`}
      >
        <BsFillArrowUpCircleFill/>
      </button>
    );
  }
  export default ScrollToTop;