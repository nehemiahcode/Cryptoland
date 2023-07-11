import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Circleimage from "../assets/circle.svg";
import { Link } from "react-router-dom";
import { LiaAngleRightSolid } from "react-icons/lia";
import GoogleImage from "../assets/google.png";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
function Getstartedcomp() {
  return (
    <>
      <Fade>
        <section
          style={{
            backgroundImage: `url(${Circleimage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "200px",
            backgroundPosition: "left",
            backgroundBlendMode: "color-dodge",
          }}
          className=" bg-[#341c97] dark:bg-slate-800 border-b-2 w-full h-[300px] flex justify-center items-center text-white"
        >
          <div>
            <h1 className=" font-semibold text-4xl">Sign up</h1>
            <div className=" flex items-center gap-2 mt-3">
              <h1 className="text-gray-200 hover:text-sky-500 text-xl font-medium">
                <Link to={"/"}>Home</Link>
              </h1>
              <LiaAngleRightSolid className=" text-white text-xl" />
              <h1 className="text-gray-400 text-xl font-medium">Sign up</h1>
            </div>
          </div>
        </section>
      </Fade>

      <form action="">
        <div className=" bg-white dark:bg-slate-800 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] h-[auto] py-10 my-5 mx-auto rounded-2xl shadow-2xl">
          <div className=" flex flex-col  items-center">
            <h1 className=" text-slate-900 dark:text-white font-bold text-3xl">
              Sign Up Now
            </h1>
            <p className=" text-zinc-800 dark:text-white text-md font-medium py-4">
              Use the form below to create your account.
            </p>
            <p className=" text-zinc-900 dark:text-white font-medium text-md pb-2">
              Sign up with your work email
            </p>
            <button className=" flex items-center justify-around mb-2 bg-white rounded-full px-5 py-3 font-medium w-[200px] border-[1px]">
              <img src={GoogleImage} alt="" />
              with Google
            </button>
            <p className="dark:text-white">Or</p>
            <hr />
            <div className=" flex w-[80%] flex-col  justify-center items-center gap-3 mx-20">
              <span className=" relative w-[100%]">
                <input
                  required={true}
                  type="text"
                  placeholder=" your name"
                  className=" bg-slate-200 rounded-full pl-8 py-3 outline-none border-[1px] border-blue-500 w-[100%]  lg:w-[100%]"
                />
                <FaRegUser className=" absolute top-4 left-3 text-lg" />
              </span>
              <span className=" relative w-[100%]">
                <input
                  required={true}
                  type="email"
                  placeholder="your email"
                  className=" bg-slate-200 rounded-full pl-8 py-3 outline-none border-[1px] border-blue-500 w-[100%]  lg:w-[100%]"
                />

                <AiOutlineMail className=" absolute top-4 left-3 text-lg" />
              </span>
              <span className=" relative w-[100%]">
                <input
                      required={true}
                  type="email"
                  placeholder="your password"
                  className=" bg-slate-200 rounded-full pl-8 py-3 outline-none border-[1px] border-blue-500 w-[100%] lg:w-[100%]"
                />

                <FaLock className=" absolute top-4 left-3 text-lg" />
              </span>
              <span className=" relative w-[100%]">
                <input
                     required={true}
                  type="email"
                  placeholder="Confirm password"
                  className=" bg-slate-200 rounded-full pl-8 py-3 outline-none border-[1px] border-blue-500 w-[100%]  lg:w-[100%]"
                />

                <FaLock className=" absolute top-4 left-3 text-lg" />
              </span>
            </div>
            <button
              type="submit"
              className=" bg-blue-600 rounded-full px-4 py-3 w-[200px] my-3 font-medium text-md text-white"
            >
              Sign up
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Getstartedcomp;
