import React from "react";
import Mainlayout from "../Components/Mainlayout";
import Contact from "../Components/Contact";
import { useEffect } from "react";
import { useState } from "react";
import BitCoing from "../assets/bit2.webp";
function Contacts() {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const Timer = setTimeout(() => {
      setAnimating(false);
    }, 2000);
    return () => clearTimeout(Timer);
  });
  return (
    <>
      {animating ? (
        <div className=" bg-slate-900 fixed top-0 left-0 h-full w-full flex justify-center items-center">
          <img
            src={BitCoing}
            alt="Loading_image.jpg"
            className=" animate-spin"
          />
        </div>
      ) : (
        <Mainlayout>
          <Contact />
        </Mainlayout>
      )}
    </>
  );
}

export default Contacts;
