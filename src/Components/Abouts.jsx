import React from "react";
import AboutImage from "../assets/aboutimage.png";
import { LiaAngleRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import Circleimage from "../assets/circle.svg";
import { BsCheckCircleFill } from "react-icons/bs";
import Details from "./Details";
import Testimonials from "./Testimonials";
import Teams from "./Teams";
import { Fade, Slide } from "react-awesome-reveal";

function Aboutcomponent() {
  const Numbers = [
    { heading: "Modular structure" },
    { heading: "Advanced payment" },
    { heading: "Mining Service" },
  ];
  return (
    <>
    <Fade direction="down">
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
          <h1 className=" font-semibold text-4xl">About</h1>
          <div className=" flex items-center gap-2 mt-3">
            <h1 className="text-gray-200 hover:text-sky-500 text-xl font-medium">
              <Link to={"/"}>Home</Link>
            </h1>
            <LiaAngleRightSolid className=" text-white text-xl" />
            <h1 className="text-gray-400 text-xl font-medium">About</h1>
          </div>
        </div>
      </section>
    </Fade>

      <section className=" grid grid-cols-1 lg:grid-cols-2 w-full h-auto lg:px-20 px-6">
      <Slide>
      <div className=" py-3">
          <img src={AboutImage} alt="" />
        </div>
      </Slide>

      <Slide direction="right">
      <div>
          <h1 className=" text-sky-500 font-bold text-xl py-4">
            DECENTRALISED ECONOMY
          </h1>
          <h1 className=" font-bold lg:text-5xl text-3xl text-black dark:text-white">
            We've built a platform to buy and sell shares.
          </h1>
          <p className=" leading-normal text-zinc-500 font-medium dark:text-white dark:text-md py-5">
            Spend real fights effective anything extra by leading. Mouthwatering
            leading how real formula also locked-in have can mountain thought.
            Jumbo plus shine sale.
          </p>

          {Numbers.map((text, index) => (
            <div key={index} className=" flex items-center gap-4 mb-3">
              <span>
                <BsCheckCircleFill className=" text-blue-600 text-2xl hover:rotate-180 duration-100" />
              </span>
              <div className=" flex flex-col gap-2 ">
                <h1 className=" font-semibold text-lg text-black dark:text-white">
                  {text.heading}
                </h1>
                <h1 className=" text-zinc-500  dark:text-white font-medium dark:text-sm text-md">
                  {" "}
                  structure Quis autem vel eum reprehenderit
                </h1>
              </div>
            </div>
          ))}
        </div>
      </Slide>
      </section>
      <Testimonials />
      <Teams />
      <Details />
    </>
  );
}

export default Aboutcomponent;
