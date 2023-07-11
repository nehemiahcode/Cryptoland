import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import { FeatureDetails } from "../Datas/Data1";
function Details() {
  const slideOptions = {
    delay: 0,
    duration: 500,
    transition: "all",
  };
  const Steps = [
    { number: "01", heading: "Create Your Wallet" },
    { number: "02", heading: "Make Payment" },
    { number: "03", heading: "Buy & Sell Coins" },
  ];
  const { heading1, heading2, paragraph1, paragraph2, bgImage1, bgImage2 } =
    FeatureDetails;
  return (
    <>
      <div className=" bg-slate-100 dark:bg-slate-800 py-3">
        <Slide cascade {...slideOptions}>
          <h1 className=" text-sky-500 font-medium text-2xl text-center py-3">
            {heading1}
          </h1>
          <h1 className=" text-[#24126A] dark:text-white font-semibold text-4xl lg:text-5xl text-center pb-3">
            {heading2}
          </h1>
          <p className=" text-black dark:text-white font-medium text-md text-center w-[90%]  lg:w-[40%] mx-auto pb-6">
            {paragraph1}
          </p>
        </Slide>
      </div>

      <section
        style={{
          backgroundImage: `url(${bgImage2})`,
          backgroundRepeat: " no-repeat",
          backgroundPosition: "top",
          backgroundSize: "100px",
          backgroundBlendMode: "color-burn",
        }}
        className="bg-slate-100 dark:bg-slate-800 duration-300 pt-5 lg:pt-20 w-full
     h-auto grid grid-cols-1 gap-10 lg:gap-7 md:grid-cols-2 lg:grid-cols-3 place-items-center px-5 lg:px-20 py-20"
      >
        {Steps.map((stepcard, index) => (
          <Zoom key={index}>
            <div className=" relative w-[90%] mx-auto py-6 md:w-[100%] h-[auto] flex gap-4 text-slate-900 dark:text-white">
              <div className=" flex flex-col gap-3">
                <h1 className="  font-semibold text-2xl">{stepcard.heading}</h1>
                <p className="font-medium text-md w-[70%]">{paragraph2}</p>
              </div>
              <div
                className=" bg-white z-30 hover:bg-blue-600 transition duration-200 hover:text-white dark:hover:bg-white dark:bg-sky-900 absolute right-0 rounded-full flex justify-center items-center
               h-[80px] w-[80px] shadow-2xl font-semibold text-3xl text-red-500 dark:text-sky-400"
              >
                {stepcard.number}
              </div>
            </div>
          </Zoom>
        ))}
      </section>
    </>
  );
}

export default Details;
