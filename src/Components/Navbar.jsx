import React from "react";
import { useEffect, useState } from "react";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { IoSunny } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
import {  Link, NavLink } from "react-router-dom";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const [isactive, setIsActive] = useState(false);
  const [darkmode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("darkmode");
    return storedMode ? storedMode : "dark";
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const scrollThreshold = 50;
    setVisible(scrollTop >= scrollThreshold);
  };
  const Menuitems = [
    { text: "Home", Url: "/" },
    { text: "About", Url: "/about" },
    { text: "Blog", Url: "/blog" },
    { text: "Contact", Url: "/contact" },
  ];

  const Toggle = [
    { icon: <IoSunny />, text: "light" },
    { icon: <BsMoonStars />, text: "dark" },
  ];
  const element = document.documentElement;
  useEffect(() => {
    switch (darkmode) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("darkmode", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("darkmode", "light");
        break;
      default:
        break;
    }
  }, [darkmode]);

  const getOtherOption = (currentOption) => {
    return Toggle.find((opt) => opt.text !== currentOption);
  };

  const handleMenuandNavbarclick = () => {
    setIsActive(!isactive);
  };

  return (
    <>
      <header
        className={`bg-[#24126A] dark:bg-slate-800 border-b-2 ${
          visible
            ? "  sticky duration-500"
            : "relative  duration-500 transition-all "
        } z-[999] top-0 left-0
         w-full h-[80px] px-5 lg:px-20  sm:px-20 md:px-24 flex justify-between items-center`}
      >
        <NavLink to={"/"}>
          <div className=" flex items-center gap-2">
            <RiMoneyDollarCircleFill className=" text-white dark:text-sky-600 text-5xl" />
            <p className=" font-medium text-white  text-2xl">Crytoland</p>
          </div>
        </NavLink>
        <ul
          className={` bg-white dark:bg-slate-800 lg:dark:bg-transparent lg:bg-transparent z-[999] w-[90%] sm:w-[80%] md:w-[70%]
          ${
            isactive
              ? " h-[300px] duration-200 "
              : " scale-[0] lg:scale-100 duration-200"
          } lg:h-auto sm:w-[80%] sm:left-[10%] md:w-[70%] md:left-[13%] lg:left-0 md:h-[350px] flex-col lg:flex-row lg:top-auto top-[90px] shadow-lg lg:shadow-none mx-auto lg:m-0 absolute
           lg:relative lg:w-[auto] z-[99999] text-black rounded-lg lg:rounded-none px-5 py-5 lg:text-white flex gap-4 lg:gap-5`}
        >
          {Menuitems.map((items, index) => (
            <li key={index}>
              <NavLink
                onClick={handleMenuandNavbarclick}
                className={` ${
                  isactive
                    ? "text-black duration-300"
                    : "text-white duration-100"
                } font-medium text-md lg:text-xl  hover:text-sky-600  dark:hover:text-sky-400 dark:text-white lg:text-white`}
                to={items.Url}
              >
                {items.text}
              </NavLink>
            </li>
          ))}
          <button
            onClick={handleMenuandNavbarclick}
            type="button"
            className=" lg:hidden px-7 py-3 mt-3 w-[200px] transition-all duration-200 hover:bg-sky-900 hover:ring-2 ring-white ring-inset  text-black rounded-full bg-sky-600 dark:bg-sky-600 dark:text-white  text-lg font-medium"
          >
           <Link to={'/signup'}> Get Started</Link>
          </button>
        </ul>
        {isactive && (
          <div className=" lg:hidden fixed  bg-black dark:bg-zinc-900 backdrop-filter backdrop-blur-lg inset-0 opacity-50  overflow-hidden w-full h-full top-[80px] left-0 right-0"></div>
        )}

        <div className=" flex items-center gap-4 ">
          <div>
            <div
              onClick={() => setDarkMode(getOtherOption(darkmode).text)}
              className={` h-10 w-10 flex justify-center items-center text-4xl rounded-full`}
            >
              <span
                className={`text-white duration-500 ${
                  darkmode === "light"
                    ? "text-white  text-3xl"
                    : "text-gray-200 font-semibold text-xl"
                }`}
              >
                {darkmode === "light" ? Toggle[0].icon : Toggle[1].icon}
              </span>
            </div>
          </div>
          <div onClick={handleMenuandNavbarclick} className=" duration-300">
            {isactive ? (
              <CgClose className=" text-white text-3xl lg:hidden" />
            ) : (
              <CgMenuRight className=" text-white text-3xl lg:hidden" />
            )}
          </div>
          <button
            type="button"
            className=" hidden md:flex px-7 py-3 transition-all duration-200
             hover:bg-sky-900 hover:ring-2 ring-white ring-inset
              text-black rounded-full bg-white dark:bg-sky-600 dark:text-white  text-lg font-medium"
          >
                   <Link to={'/signup'}> Get Started</Link>
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
